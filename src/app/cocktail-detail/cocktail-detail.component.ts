import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { DataService } from '../data.service';

@Component({
    selector: 'app-cocktail-detail',
    templateUrl: './cocktail-detail.component.html',
    styleUrls: ['./cocktail-detail.component.css']
})
export class CocktailDetailComponent implements OnInit {

    cocktail: any

    constructor(
        private activatedRoute: ActivatedRoute,
        private dataService: DataService) { }

  ngOnInit(): void {
      this.activatedRoute.paramMap.pipe(
          map( params => params.get('id') ?? '' ),
          switchMap( id => this.dataService.getCocktailById(id) )
      ).subscribe(
        cocktail => this.cocktail = cocktail[0]
      )
  }

}
