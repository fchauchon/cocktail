import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Cocktail } from '../cocktail.interface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cocktails-by-letter',
  templateUrl: './cocktails-by-letter.component.html',
  styleUrls: ['./cocktails-by-letter.component.css']
})
export class CocktailsByLetterComponent implements OnInit {

    cocktails: Cocktail[] = []

    constructor(
        private activatedRoute: ActivatedRoute,
        private dataService: DataService)
    { }

    ngOnInit(): void {
        this.activatedRoute.paramMap.pipe(
            map( params => params.get('letter') ?? '' ),
            switchMap( letter => this.dataService.getCocktailsBegin(letter) )
        ).subscribe(
            cocktails => this.cocktails = cocktails
        )
    }

}
