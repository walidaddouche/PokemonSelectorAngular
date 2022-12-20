import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {POKEMONS} from "../mock-pokemon-list";
import {Pokemon} from "../pokemon";

@Component({
    selector: 'app-detail-pokemon',
    templateUrl: 'detail-pokemon.component.html',
    styles: []
})
export class DetailPokemonComponent implements OnInit {

    pokemonList: Pokemon[] ;
    currentPokemon: Pokemon | undefined;

    constructor(private routes: ActivatedRoute, private router : Router) {

    }

    ngOnInit() {
        this.pokemonList = POKEMONS;
        const pokemonId: string | null = this.routes.snapshot.paramMap.get("id");
        console.log(pokemonId)
        if (pokemonId != null) {
            this.currentPokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
        }

    }
    goToPokemonList(){
        this.router.navigate(["/pokemons"]);

    }

}
