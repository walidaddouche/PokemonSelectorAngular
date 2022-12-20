import {Component, OnInit} from '@angular/core';
import {POKEMONS} from "./mock-pokemon-list";
import {Pokemon} from "./pokemon";

@Component({
    selector: 'app-root',
    templateUrl: "app.component.html"
})

// selector -> le nom du component
// template -> le code de la page

export class AppComponent implements OnInit {

    pokemonList: Pokemon[] = POKEMONS;

    pokemonSelected: Pokemon | undefined;



    ngOnInit(): void {
        console.log(this.pokemonList)
    }

    selectPokemon(index: string) {
        this.selectPokemonWithId(+index);
        if (this.pokemonSelected === undefined) {
            console.log("Vous avez demandé un pokemon qui n'existe pas ")
        } else {
            let name = this.pokemonSelected.name;
            console.log(`Le pokemon selectioné est ${name}`)

        }

    }

    selectPokemonWithId(id: number) {

        this.pokemonSelected = this.pokemonList.find(pokemon => pokemon.id === id);

    }
}