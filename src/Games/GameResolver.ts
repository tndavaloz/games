import { Game } from "../Types/Game";
import { GameService } from "./GameService";

export class GameResolver {
  private service: GameService;

  constructor(service: GameService) {
    this.service = service;
  }

  public resolve(_: undefined, args: {[key: string]: string}): Game[] {
    return this.service.getGames(args);
  }
}
