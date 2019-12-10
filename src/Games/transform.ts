import { Game } from "../Types/Game";

type Data = Array<{ [key: string]: any }>;

export const transform = (data: Data): Game[] => {
  return data.map((game): Game => {
    return {
      type: game.type,
      title: game.game,
      releaseYear: game.year,
      numberOfPlayers: game.players,
      consoleName: game.system,
    };
  });
};
