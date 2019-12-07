import { GameService } from "../../src/Games/GameService";
import { GamesMock, BoardGamesMock, VideoGamesMock } from "../mocks/games";

const service = new GameService();

it("returns a Game array", () => {
  expect(service.getGames({})).toEqual(GamesMock);
});

it("filters to return only board games", () => {
  expect(service.getGames({ type_of_game: "board" })).toEqual(BoardGamesMock);
});

it("filters to return only video games", () => {
  expect(service.getGames({ type_of_game: "video" })).toEqual(VideoGamesMock);
});
