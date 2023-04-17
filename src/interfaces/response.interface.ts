
export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: any;
  results: SmallPokemon[];
}

export  interface SmallPokemon {
  name: string;
  url: string;
}
export interface TablePokemon{
  position: number;
  image: string;
  name: string;
}

