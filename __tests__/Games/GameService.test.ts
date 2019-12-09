import { GameService } from "../../src/Games/GameService";
import {
  GamesMock,
  BoardGamesMock,
  VideoGamesMock,
  SinglePlayerGames,
  FourPlayerVideoGames,
} from "../mocks/games";

const service = new GameService();

it("returns a Game array", () => {
  expect(service.getGames({})).toEqual(GamesMock);
});

it("filters to return only board games", () => {
  expect(service.getGames({ type: "board" })).toEqual(BoardGamesMock);
});

it("filters to return only video games", () => {
  expect(service.getGames({ type: "video" })).toEqual(VideoGamesMock);
});

it("returns games that are single player", () => {
  expect(service.getGames({ number_of_players: 1 })).toEqual(SinglePlayerGames);
});

it("filters games with four players and video games", () => {
  expect(service.getGames({ type: "video", number_of_players: 4 })).toEqual(FourPlayerVideoGames);
});
