import { GameService } from "../../src/Games/GameService";
import {
  GamesMock,
  BoardGamesMock,
  VideoGamesMock,
  ReleaseYear2017Mock,
  SingleGameMock,
  SinglePlayerGamesMock,
  FourPlayerVideoGamesMock,
  VideoGames2018Mock,
  SinglePlayer2018Mock,
  SinglePlayerVideoGame2018Mock,
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
  expect(service.getGames({ numberOfPlayers: 1 })).toEqual(SinglePlayerGamesMock);
});

it("returns games that were released in 2017", () => {
  expect(service.getGames({ releaseYear: 2017 })).toEqual(ReleaseYear2017Mock);
});

it("returns the game Resident Evil 7", () => {
  expect(service.getGames({ title: "Hollow Knight" })).toEqual(SingleGameMock);
});

it("filters games with four players and video games", () => {
  expect(service.getGames({ type: "video", numberOfPlayers: 4 })).toEqual(FourPlayerVideoGamesMock);
});

it("filters type and title games", () => {
  expect(service.getGames({ type: "video", title: "Hollow Knight" })).toEqual(SingleGameMock);
});

it("filters number of players and title games", () => {
  expect(service.getGames({ numberOfPlayers: 1, title: "Hollow Knight" })).toEqual(SingleGameMock);
});

it("filters number of players and title games", () => {
  expect(service.getGames({ numberOfPlayers: 1, title: "Hollow Knight" })).toEqual(SingleGameMock);
});

it("filters games by release year and title", () => {
  expect(service.getGames({ releaseYear: 2018, title: "Hollow Knight" })).toEqual(SingleGameMock);
});


it("filters video games released in 2018", () => {
  expect(service.getGames({ type: "video", releaseYear: 2018 })).toEqual(VideoGames2018Mock);
});

it("filters games with one player and video games", () => {
  expect(service.getGames({ numberOfPlayers: 1, releaseYear: 2018 })).toEqual(SinglePlayer2018Mock);
});

it("filters games with one player, video games, and released in 2018", () => {
  expect(service.getGames({ numberOfPlayers: 1, releaseYear: 2018 })).toEqual(SinglePlayer2018Mock);
});

it("filters single player video games, released in 2017", () => {
  expect(service.getGames({ releaseYear: 2017, type: "video", numberOfPlayers: 1 }))
    .toEqual(SinglePlayerVideoGame2018Mock);
});
