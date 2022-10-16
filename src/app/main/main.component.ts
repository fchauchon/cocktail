import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {

    @Input() state: string = ''
    myClasses: any = {}
    lastCocktail: string = 'No value'
    cocktails: Array<any> = new Array<any>()

    constructor() { }

    ngOnInit(): void {
        this.cocktails.push( { name: 'Mojito', description: 'Rien de mieux qu\'un bon mojito maison fait dans les régles de l\'art', img: 'assets/mojito.jpg', alcool: true } )
        this.cocktails.push( { name: 'Cuba libre', description: 'Le Cuba libre est un cocktail officiel de l\'IBA4, à base de rhum, citron vert, et cola.', img: 'assets/cubalibre.jpg', alcool: true } )
        this.cocktails.push( { name: 'Margarita', description: 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique', img: 'assets/margarita.jpg', alcool: true } )
        this.cocktails.push( { name: 'Sex on the beach', description: 'Le Sex on the Beach est un cocktail alcoolisé contenant de la vodka, du Schnaps à la pêche, du jus d\'orange et du jus de canneberge', img: 'assets/sexonthebeach.jpg', alcool: false } )
        this.cocktails.push( { name: 'Virgin Mojito', description: 'Le Virgin Mojito est inspiré par le célèbre Mojito cubain, l\'un des ceux qui représente le plus la culture cubaine, à l\'égal du Cuba libre et du Daiquiri.', img: 'assets/virginmojito.jpg', alcool: false } )
        this.manageState()
    }

    ngOnChanges() {
        this.manageState()
    }

    onEvent = (event: any) => {
        this.lastCocktail = event
    }

    manageState = () => {
        this.myClasses.normal = this.state === 'normal'
        this.myClasses.max = this.state !== 'normal'
    }

}
