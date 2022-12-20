import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'app-root',
    templateUrl: "app.component.html"
})

// selector -> le nom du component
// template -> le code de la page

export class AppComponent  {
    constructor(private routes: ActivatedRoute, private router : Router) {

    }


        goToHomePage() {
        this.router.navigate(["/pokemons"]);

    }
}