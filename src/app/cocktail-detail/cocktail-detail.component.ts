import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
        this.route.paramMap.subscribe(
            (params) => this.cocktails = this.dataService.getCocktailFilteredByLetter(params.get('letter') ?? '')
        )
    }

    back() {
        this.router.navigateByUrl('/home')
    }

}
