import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit, OnDestroy {

    @Input() cocktail: any
    @Output() eventOut = new EventEmitter<string>()
    isHidden: boolean = false;

    ingredients: Array<string> = new Array<string>()
    
    constructor() { }

    ngOnInit(): void {
    }

    onClick() {
        this.eventOut.emit(this.cocktail.name)
    }

    ngOnDestroy(): void {
    }
}
