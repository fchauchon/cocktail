import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

    myClasses: any = {}
    lastCocktail: string = '(aucun)'
    cocktailsWith!: Array<any>
    cocktailsWithout!: Array<any>

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getCocktailsWith().subscribe(
            data => this.cocktailsWith = data
        )
        this.dataService.getCocktailsWithout().subscribe(
            data => this.cocktailsWithout = data
        )
    }

    onEvent = (event: any) => {
        this.lastCocktail = event
    }

}
