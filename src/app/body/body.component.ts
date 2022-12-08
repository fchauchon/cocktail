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
    cocktails: Array<any> = new Array<any>()

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.cocktails = this.dataService.getCocktails()
    }

    onEvent = (event: any) => {
        this.lastCocktail = event
    }

}
