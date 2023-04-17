import { Action, createReducer, on } from '@ngrx/store';
import * as fromPokemonsActions from '../actions/pokemon.action';
import { Pokemon, TablePokemon } from 'src/interfaces';

export interface PokemonState {
  data: TablePokemon[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialState: PokemonState = {
  data: [],
  loaded: false,
  loading: false,
  error: null,
};



const reducer = createReducer(
  initialState,
  on(fromPokemonsActions.getPokemons, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(fromPokemonsActions.getPokemonsSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    data: payload,
  })),
  on(fromPokemonsActions.getPokemonsFail, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  })),
  on(fromPokemonsActions.addPokemon, (state,{payload}) => ({
    ...state,
    loading: true,
    error: null,
    data: [...state.data, payload],
  })),
  on(fromPokemonsActions.addPokemonSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    data: [...state.data, payload],
  })),
  on(fromPokemonsActions.addPokemonFail, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  })),
  on(fromPokemonsActions.deletePokemon, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(fromPokemonsActions.deletePokemonSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    data: state.data.filter((pokemon) => pokemon.position !== payload),
  })),
  on(fromPokemonsActions.deletePokemonFail, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);
export function pokemonReducer(state: PokemonState | undefined, action: Action) {
  return reducer(state, action);
}


export const getPokemons = (state: PokemonState) => state.data;
export const getPokemonsLoading = (state: PokemonState) => state.loading;
export const getPokemonsLoaded = (state: PokemonState) => state.loaded;
export const getPokemonsError = (state: PokemonState) => state.error;
