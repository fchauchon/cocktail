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

    cocktail: any | null = null

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService)
    { }

    ngOnInit(): void {
        this.route.paramMap.pipe(
            switchMap( (params) => this.dataService.getCocktailById(params.get('id') ?? ''))
        ).subscribe(
            (cocktail) => this.cocktail = cocktail
        )
    }

}
