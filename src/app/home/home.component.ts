import { DataService } from '../data.service';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    lastCocktail: string = ''
    cocktails: any[] = []

    searchForm: UntypedFormGroup
    searchCtrl: FormControl<string>

    constructor(private dataService: DataService) {
        this.searchCtrl = new FormControl('', { validators: [Validators.required], nonNullable: true })
        this.searchForm = new UntypedFormGroup({
            search: this.searchCtrl
        })
    }

    ngOnInit(): void {
        this.cocktails = this.dataService.getCocktails()
        this.searchCtrl.valueChanges.subscribe(
            val => this.cocktails = this.dataService.getCocktailsContains(val)
        )
    }

    onEvent = (event: any) => {
        this.lastCocktail = event
    }
}
