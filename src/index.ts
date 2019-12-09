import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { GameResolver } from "./Games/GameResolver";
import { GameService } from "./Games/GameService";

const startServer = async (): Promise<void> => {
  const service = new GameService();
  const resolver = new GameResolver(service);

  const typeDefs = gql`
    type Game {
      title: String
      release_year: Int
      numberOfPlayers: Int
      type: String
      console_name: String
    }

    type Query {
      games (
        type: String
        number_of_players: Int
      ): [Game]!
    }
  `;

  const resolvers = {
    Query: {
      games(parent: undefined, args: any) {
        return resolver.resolve(parent, args);
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
