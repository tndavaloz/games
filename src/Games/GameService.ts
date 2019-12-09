import { Game } from "../Types/Game";
import { games } from "../../data/games";
import { transform } from "./transform";

interface GameArguments {
  type?: string;
  number_of_players?: number;
 }

export class GameService {
  public getGames(args: GameArguments): Game[] {
    const gamesObject = transform(games);

    if (Object.values(args).length === 0) {

      return gamesObject;
    }

    return gamesObject.filter((game) => {
      if (args.type !== undefined && args.number_of_players === undefined) {
        return args.type === game.type;
      } else if (args.type === undefined && args.number_of_players !== undefined) {
        return args.number_of_players === game.numberOfPlayers;
      }

      return args.number_of_players === game.numberOfPlayers && args.type === game.type;
    });
  }
}
