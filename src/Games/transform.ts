import { Game } from "../Types/Game";

type Data = Array<{ [key: string]: any }>;

export const transform = (data: Data): Game[] => {
  return data.reduce((acc: Game[], curr: { [key: string]: any }) => {
    const game: Game = {
      type: curr.type,
      title: curr.game,
      release_year: curr.year,
      numberOfPlayers: curr.players,
      consoleName: curr.system,
    };
    acc.push(game);

    return acc;
  }, [] as Game[]);
};
