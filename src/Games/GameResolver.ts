import { Game } from "../Types/Game";
import { GameArguments, GameService } from "./GameService";

export class GameResolver {
  private service: GameService;

  constructor(service: GameService) {
    this.service = service;
  }

  public resolve(_: undefined, args: GameArguments): Game[] {
    return this.service.getGames(args);
  }
}
