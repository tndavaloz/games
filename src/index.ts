import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { GameResolver } from "./Games/GameResolver";
import { GameService } from "./Games/GameService";

const startServer = async (): Promise<void> => {
  const service = new GameService();
  const resolver = new GameResolver(service);

  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    type Game {
      title: String
      release_year: Int
      number_of_players: Int
      type: String
      console_name: String
    }

    type Query {
      games: [Game]!
    }
  `;

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      games() {
        return resolver.resolve();
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
