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
    nameClass: any = { 'font-style': 'italic' }
    nameStyle: any = { }
    descriptionStyles: any = {}

    ingredients: Array<string> = new Array<string>()

    inputValue: string = ''
    
    constructor() { }

    ngOnInit(): void {
        this.nameClass.gras = true;
        this.inputValue = 'Input value';
        this.ingredients.push('Citrons verts')
        this.ingredients.push('Rhum')
        this.ingredients.push('Sucre de canne')
        this.ingredients.push('Menthe')
        this.nameStyle = { 'color': this.inputValue }
    }

    onClick() {
        this.eventOut.emit(this.cocktail.name)
    }

    ngOnDestroy(): void {
    }
}
