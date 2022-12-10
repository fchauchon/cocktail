import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../cocktail.interface';

@Component({
    selector: 'app-cocktails-list',
    templateUrl: './cocktails-list.component.html',
    styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
    @Input() cocktails: Cocktail[] = []
    @Output() eventOut: EventEmitter<string> = new EventEmitter<string>()

    constructor() { }

    ngOnInit(): void {
    }

    onEvent = (event: any) => {
        this.eventOut.emit(event)
    }
}
