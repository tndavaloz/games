import { Game } from "../Types/Game";
import { games } from "../../data/games";
import { transform } from "./transform";

export class GameService {
  public getGames(args: { [key: string]: string }): Game[] {
    const gamesObject = transform(games);
    if (Object.entries(args).length === 0) {
      return gamesObject;
    }

    return gamesObject.filter((game: Game) => {
      return game.type === args.type_of_game;
    });
  }
}
