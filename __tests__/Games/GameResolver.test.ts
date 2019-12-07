import { GameResolver } from "../../src/Games/GameResolver";
import { GameService } from "../../src/Games/GameService";
import { GamesMock } from "../mocks/games";

it("should return an array of all games", () => {
  const service = new GameService();
  const resolver = new GameResolver(service);

  expect(resolver.resolve(undefined, {})).toEqual(GamesMock);
});
