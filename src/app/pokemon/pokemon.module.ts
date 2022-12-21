import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {BorderCardDirective} from "./border-card.directive";
import {RouterModule, Routes} from "@angular/router";
import {PokemonService} from "./pokemon.service";

const pokemonRoutes: Routes = [

    {path: "pokemons", component: ListPokemonComponent},
    {path: "pokemon/:id", component: DetailPokemonComponent}
]

@NgModule({
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonTypeColorPipe,
        BorderCardDirective
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(pokemonRoutes)
    ],
    providers: [PokemonService]
})
export class PokemonModule {
}