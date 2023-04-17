// import { Action } from '@ngrx/store';
 import { Pokemon, TablePokemon } from '../../../interfaces';

export const GET_POKEMONS = '[POKEMON] Get Pokemons';
export const GET_POKEMONS_SUCCESS = '[POKEMON] Get Pokemons Success';
export const GET_POKEMONS_FAIL = '[POKEMON] Get Pokemons Fail';

// // ADD POKEMON
export const ADD_POKEMON = '[POKEMON] Add Pokemon';
export const ADD_POKEMON_SUCCESS = '[POKEMON] Add Pokemon Success';
export const ADD_POKEMON_FAIL = '[POKEMON] Add Pokemon Fail';

// DELETE POKEMON
export const DELETE_POKEMON = '[POKEMON] Delete Pokemon';
export const DELETE_POKEMON_SUCCESS = '[POKEMON] Delete Pokemon Success';
export const DELETE_POKEMON_FAIL = '[POKEMON] Delete Pokemon Fail';

// UPDATE POKEMON
export const UPDATE_POKEMON = '[POKEMON] Update Pokemon';
export const UPDATE_POKEMON_SUCCESS = '[POKEMON] Update Pokemon Success';
export const UPDATE_POKEMON_FAIL = '[POKEMON] Update Pokemon Fail';

// export class GetPokemons implements Action {
//   readonly type = GET_POKEMONS;
// }

// export class GetPokemonsSuccess implements Action {
//   readonly type = GET_POKEMONS_SUCCESS;
//   constructor(public payload: TablePokemon[]) {}
// }

// export class GetPokemonsFail implements Action {
//   readonly type = GET_POKEMONS_FAIL;
//   constructor(public payload: any) {}
// }

// // ADD POKEMON
// export class AddPokemon implements Action {
//   readonly type = ADD_POKEMON;
//   constructor(public payload: TablePokemon) {}
// }

// export class AddPokemonSuccess implements Action {
//   readonly type = ADD_POKEMON_SUCCESS;
//   constructor(public payload: TablePokemon) {}
// }

// export class AddPokemonFail implements Action {
//   readonly type = ADD_POKEMON_FAIL;
//   constructor(public payload: TablePokemon) {}
// }

// // DELETE POKEMON
// export class DeletePokemon implements Action {
//   readonly type = DELETE_POKEMON;
//   constructor(public payload: number) {}
// }

// export class DeletePokemonSuccess implements Action {
//   readonly type = DELETE_POKEMON_SUCCESS;
//   constructor(public payload: number) {}
// }

// export class DeletePokemonFail implements Action {
//   readonly type = DELETE_POKEMON_FAIL;
//   constructor(public payload: any) {}
// }

// // UPDATE POKEMON
// export class UpdatePokemon implements Action {
//   readonly type = UPDATE_POKEMON;
//   constructor(public payload: Pokemon) {}
// }

// export class UpdatePokemonSuccess implements Action {
//   readonly type = UPDATE_POKEMON_SUCCESS;
//   constructor(public payload: Pokemon) {}
// }

// export class UpdatePokemonFail implements Action {
//   readonly type = UPDATE_POKEMON_FAIL;
//   constructor(public payload: TablePokemon) {}
// }

import { createAction } from "@ngrx/store";

export const getPokemons = createAction('[POKEMON] Get Pokemons');
export const getPokemonsSuccess = createAction('[POKEMON] Get Pokemons Success', (payload: TablePokemon[]) => ({ payload }));
export const getPokemonsFail = createAction('[POKEMON] Get Pokemons Fail', (payload: any) => ({ payload }));

// ADD POKEMON
export const addPokemon = createAction('[POKEMON] Add Pokemon', (payload: TablePokemon) => ({ payload }));
export const addPokemonSuccess = createAction('[POKEMON] Add Pokemon Success', (payload: TablePokemon) => ({ payload }));
export const addPokemonFail = createAction('[POKEMON] Add Pokemon Fail', (payload: TablePokemon) => ({ payload }));

// DELETE POKEMON
export const deletePokemon = createAction('[POKEMON] Delete Pokemon', (payload: number) => ({ payload }));
export const deletePokemonSuccess = createAction('[POKEMON] Delete Pokemon Success', (payload: number) => ({ payload }));
export const deletePokemonFail = createAction('[POKEMON] Delete Pokemon Fail', (payload: any) => ({ payload }));

// UPDATE POKEMON
export const updatePokemon = createAction('[POKEMON] Update Pokemon', (payload: Pokemon) => ({ payload }));
export const updatePokemonSuccess = createAction('[POKEMON] Update Pokemon Success', (payload: Pokemon) => ({ payload }));
export const updatePokemonFail = createAction('[POKEMON] Update Pokemon Fail', (payload: TablePokemon) => ({ payload }));


// export type PokemonActions =
//   | GetPokemons
//   | GetPokemonsSuccess
//   | GetPokemonsFail
//   | AddPokemon
//   | AddPokemonSuccess
//   | AddPokemonFail
//   | DeletePokemon
//   | DeletePokemonSuccess
//   | DeletePokemonFail
//   | UpdatePokemon
//   | UpdatePokemonSuccess
//   | UpdatePokemonFail;
