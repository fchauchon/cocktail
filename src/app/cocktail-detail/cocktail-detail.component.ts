import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { DataService } from '../data.service';

@Component({
    selector: 'app-cocktail-detail',
    templateUrl: './cocktail-detail.component.html',
    styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {

    cocktails: any[]  = []

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService)
    { }

    ngOnInit(): void {
        this.route.paramMap.pipe(
            switchMap( (params) => this.dataService.getCocktailsFirstLetter(params.get('letter') ?? ''))
        ).subscribe(
            (cocktails) => this.cocktails = cocktails
        )
    }

}
