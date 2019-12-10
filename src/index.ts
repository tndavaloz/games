import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { GameResolver } from "./Games/GameResolver";
import { GameArguments, GameService } from "./Games/GameService";

const startServer = async (): Promise<void> => {
  const service = new GameService();
  const resolver = new GameResolver(service);

  const typeDefs = gql`
    type Game {
      title: String
      releaseYear: Int
      numberOfPlayers: Int
      type: String
      consoleName: String
    }

    type Query {
      games (
        type: String
        numberOfPlayers: Int
        releaseYear: Int
        title: String
      ): [Game]!
    }
  `;

  const resolvers = {
    Query: {
      games(_: undefined, args: GameArguments) {
        return resolver.resolve(_, args);
      },
    },
  };

  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    // tslint:disable-next-line: no-console
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
