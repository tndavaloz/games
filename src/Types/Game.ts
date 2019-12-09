export interface Game {
  type: string;
  title: string;
  release_year: number;
  numberOfPlayers: number;
  consoleName?: string;
}
