import { DataService } from '../data.service';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Cocktail } from '../cocktail.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    lastCocktail: string = ''
    cocktails: Cocktail[] = []

    searchForm: UntypedFormGroup
    searchCtrl: FormControl<string>

    constructor(
        private dataService: DataService
    ) {
        this.searchCtrl = new FormControl('', {
            validators: [Validators.required],
            nonNullable: true
        })
        this.searchForm = new UntypedFormGroup({
            search: this.searchCtrl
        })
    }

    ngOnInit(): void {
        this.dataService.getCocktails().subscribe(
            (data: any[]) => { this.cocktails = data}
        )

        this.searchCtrl.valueChanges.pipe(
            switchMap( (val: string) => this.dataService.getCocktailsContains(val))
            ).subscribe(
                (cocktails: Cocktail[]) => this.cocktails = cocktails
        )
    }

    onEvent = (event: any) => {
        this.lastCocktail = event
    }
}
