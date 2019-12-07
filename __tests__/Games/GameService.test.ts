import { GameService } from "../../src/Games/GameService";
import { GamesMock } from "../mocks/games";

it("returns a Game array", () => {
  const service = new GameService();

  expect(service.getGames()).toEqual(GamesMock);
});
