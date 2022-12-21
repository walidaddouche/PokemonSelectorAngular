import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {POKEMONS} from "../mock-pokemon-list";
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
    selector: 'app-detail-pokemon',
    templateUrl: 'detail-pokemon.component.html',
    styles: []
})
export class DetailPokemonComponent implements OnInit {

    pokemonList: Pokemon[];
    currentPokemon: Pokemon | undefined;

    constructor(private routes: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {

    }

    ngOnInit() {
        this.pokemonList = this.pokemonService.getPokemonList();
        const pokemonId: string | null = this.routes.snapshot.paramMap.get("id");
        if (pokemonId) {
            this.currentPokemon = this.pokemonService.getPokemonById(+pokemonId);
        }

    }

    goToPokemonList() {
        this.router.navigate(["/pokemons"]);
    }

}
