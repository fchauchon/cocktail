import { CocktailService } from './../cocktail.service';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    lastCocktail: string = 'No value'
    cocktails: Array<any> = new Array<any>()

    displayedCocktails: Array<any> = new Array<any>()
    formGroup: UntypedFormGroup
    searchControl: FormControl

    constructor(
        private route: ActivatedRoute,
        private cocktailService: CocktailService
    ) {
        this.searchControl = new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')])
        this.formGroup = new UntypedFormGroup(
            { search: this.searchControl }
        )
    }

    ngOnInit(): void {
        this.cocktails = this.cocktailService.getCocktails()
        this.route.paramMap.subscribe(
            (params) => this.displayedCocktails = this.cocktails.filter( el => params.get('letter') ? el.name[0] === params.get('letter') : true)
        )
    }

    onEvent = (event: any) => {
        this.lastCocktail = event
    }

    submit() {
        let filter = this.searchControl.value
        this.displayedCocktails = this.cocktails.filter( el => filter ? el.name === filter : true )
    }
}
