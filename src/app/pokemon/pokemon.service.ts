import { Injectable } from '@angular/core';
import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemon-list";

@Injectable()
export class PokemonService {

  getPokemonList() : Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(id : number) : Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == id )
  }


  getPokemonTypeList() : string[]{
    return [
      "Plante" ,
      "Feu" ,
      "Eau",
      "Insecte" ,
      "Normal",
      "Electrik",
      "Posion" ,
      "Fée" ,
      "Vol" ,
      "Combat",
      "Psy"
    ];
  }

}
