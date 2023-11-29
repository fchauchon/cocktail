import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

    myClasses: any = {}
    lastCocktail: string = 'No value'
    cocktailsWith!: Array<any>
    cocktailsWithout!: Array<any>

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.cocktailsWith = this.dataService.getCocktailsWith()
        this.cocktailsWithout = this.dataService.getCocktailsWithout()
    }

    onEvent = (event: any) => {
        this.lastCocktail = event
    }

}
