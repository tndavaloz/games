import { transform } from "../../src/Games/transform";
import { games, GamesMock } from "../mocks/games";

it("should return an array of Game objects", () => {
  expect(transform(games)).toEqual(GamesMock);
});
