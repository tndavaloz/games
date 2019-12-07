import { Game } from "../Types/Game";
import { games } from "./games";
import { transform } from "./transform";

export class GameService {
  public getGames(): Game[] {
    return transform(games);
  }
}
