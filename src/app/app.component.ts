import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    template:
        `
            <h1>
                Hello {{title}}
            </h1>

        `

})

// selector -> le nom du component
// template -> le code de la page

export class AppComponent implements OnInit {
    ngOnInit(): void {

    }

    selectPokemon(name: string) {
        console.log(` Vous avez cliqué sur le pokemon ${name} `)
    }


    title: string = 'ng-pokemon-app';


}