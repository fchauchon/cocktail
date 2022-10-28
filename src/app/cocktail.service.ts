import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

    cocktails = [
        { name: 'Mojito', description: 'Rien de mieux qu\'un bon mojito maison fait dans les régles de l\'art', img: 'assets/mojito.jpg', alcool: true },
        { name: 'Cuba libre', description: 'Le Cuba libre est un cocktail officiel de l\'IBA4, à base de rhum, citron vert, et cola.', img: 'assets/cubalibre.jpg', alcool: true },
        { name: 'Margarita', description: 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique', img: 'assets/margarita.jpg', alcool: true },
        { name: 'Sex on the beach', description: 'Le Sex on the Beach est un cocktail alcoolisé contenant de la vodka, du Schnaps à la pêche, du jus d\'orange et du jus de canneberge', img: 'assets/sexonthebeach.jpg', alcool: true },
        { name: 'Virgin Mojito', description: 'Le Virgin Mojito est inspiré par le célèbre Mojito cubain, l\'un des ceux qui représente le plus la culture cubaine, à l\'égal du Cuba libre et du Daiquiri.', img: 'assets/virginmojito.jpg', alcool: false }
    ]

    constructor() { }

    getCocktails() {
        return this.cocktails
    }

    getCocktailsWithAlcool() {
        return this.cocktails.filter( el => el.alcool )
    }

    getCocktailsWithoutAlcool() {
        return this.cocktails.filter( el => !el.alcool )
    }

    getCocktailFilteredByName(search: string) {
        return this.cocktails.filter( el => el.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0 )
    }
}
