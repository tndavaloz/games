import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { GameResolver } from "./Games/GameResolver";
import { GameService } from "./Games/GameService";

import { ReviewResolver } from "./Reviews/ReviewResolver";
import { ReviewService } from "./Reviews/ReviewService";
import { Review } from "./Types/Review";

const startServer = async (): Promise<void> => {
  const gameResolver = new GameResolver(new GameService());
  const reviewResolver = new ReviewResolver(new ReviewService());

  const typeDefs = gql`
    type Game {
      title: String
      release_year: Int
      numberOfPlayers: Int
      type: String
      console_name: String
    }

    type Review {
      gameId: String
      reviewerName: String
      rating: Int
      comment: String
    }

    type Query {
      games(type: String, number_of_players: Int): [Game]!
      reviews: [Review]!
    }
  `;

  const resolvers = {
    Review: {
      gameId({ game_id }: Review) {
        return game_id;
      },
      reviewerName({ reviewer_name }: Review) {
        return reviewer_name;
      }
    },
    Query: {
      games(parent: undefined, args: any) {
        return gameResolver.resolve(parent, args);
      },
      reviews(parent: undefined, args: any) {
        return reviewResolver.resolve(parent, args);
      }
    }
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
