import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Pokemon, PokemonListResponse } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http : HttpClient,
  ) { }

  getPokemons(){
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  }
  getPokemon(name:string){
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  getPokemonId(id:number){
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
