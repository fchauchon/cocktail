import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit, OnDestroy {

    isHidden: boolean = false;
    name: string = 'Mojito'
    nameClass: any = { 'font-style': 'italic' }

    description: string = 'Délicieux cocktail'
    descriptionStyles: any = {}

    ingredients: Array<string> = new Array<string>()

    inputValue: string = ''
    
    constructor() {
        console.warn('Constructor')
    }

    ngOnInit(): void {
        this.nameClass.gras = true;
        this.inputValue = 'Input value';
        this.ingredients.push('Citrons verts')
        this.ingredients.push('Rhum')
        this.ingredients.push('Sucre de canne')
        this.ingredients.push('Menthe')
    }

    onClick() {
        this.isHidden = ! this.isHidden
    }

    ngOnDestroy(): void {
    }
}
