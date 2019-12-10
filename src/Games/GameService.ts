import { Game } from "../Types/Game";
import { games } from "../../data/games";
import { transform } from "./transform";

export interface GameArguments {
  type?: string;
  numberOfPlayers?: number;
  releaseYear?: number;
 }

export class GameService {
  public getGames(args: GameArguments): Game[] {
    const gamesObject: Game[] = transform(games);

    if (Object.values(args).length === 0) {
      return gamesObject;
    }

    return gamesObject.filter((game: Game) => {
      if (args.type !== undefined && args.numberOfPlayers === undefined && args.releaseYear === undefined) {
        return args.type === game.type;
      } else if (args.type === undefined && args.numberOfPlayers !== undefined && args.releaseYear === undefined) {
        return args.numberOfPlayers === game.numberOfPlayers;
      } else if (args.type === undefined && args.numberOfPlayers === undefined && args.releaseYear !== undefined) {
        return args.releaseYear === game.releaseYear;
      } else if (args.type !== undefined && args.numberOfPlayers !== undefined && args.releaseYear === undefined) {
        return args.type === game.type && args.numberOfPlayers === game.numberOfPlayers;
      } else if (args.type !== undefined && args.numberOfPlayers === undefined && args.releaseYear !== undefined) {
        return args.type === game.type && args.releaseYear === game.releaseYear;
      } else if (args.type === undefined && args.numberOfPlayers !== undefined && args.releaseYear !== undefined) {
        return args.numberOfPlayers === game.numberOfPlayers && args.releaseYear === game.releaseYear;
      }

      return args.numberOfPlayers === game.numberOfPlayers
        && args.type === game.type
        && args.releaseYear === game.releaseYear;
    });
  }
}
