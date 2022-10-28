import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-with-or-without',
  templateUrl: './with-or-without.component.html',
  styleUrls: ['./with-or-without.component.css']
})
export class WithOrWithoutComponent implements OnInit {

    cocktails: Array<any> = []

    constructor(
        private router: Router,
        private cocktailService: CocktailService
    ) { }

    ngOnInit(): void {
        if (this.router.url === '/with') {
            this.cocktails = this.cocktailService.getCocktailsWithAlcool()
        } else {
            this.cocktails = this.cocktailService.getCocktailsWithoutAlcool()
        }
    }

}
