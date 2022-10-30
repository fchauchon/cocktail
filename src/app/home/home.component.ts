import { CocktailService } from '../cocktail.service';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    lastCocktail: string = ''
    cocktails: Array<any> = new Array<any>()
    displayedCocktails: Array<any> = new Array<any>()

    searchForm: UntypedFormGroup
    searchCtrl: FormControl<string>

    constructor(
        private route: ActivatedRoute,
        private cocktailService: CocktailService
    ) {
        this.searchCtrl = new FormControl('', { validators: [Validators.required], nonNullable: true })
        this.searchForm = new UntypedFormGroup({
            search: this.searchCtrl
        })
    }

    ngOnInit(): void {
        this.cocktails = this.cocktailService.getCocktails()
        this.route.paramMap.subscribe(
            (params) => this.displayedCocktails = this.cocktails.filter( el => params.get('letter') ? el.name[0] === params.get('letter') : true)
        )
        this.searchCtrl.valueChanges.subscribe(
            val => this.displayedCocktails = this.cocktailService.getCocktailFilteredByName(val)
        )
    }

    onEvent = (event: any) => {
        this.lastCocktail = event
    }
}
