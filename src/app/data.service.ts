import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Cocktail } from './cocktail.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    BASE_URL = '/api'

    constructor(private http: HttpClient) { }

    getCocktails(): Observable<Cocktail[]> {
        return this.http.get(this.BASE_URL + '/search.php?s=m').pipe(
            map( (data: any) => this.obj2ArrayCocktail(data) )
        )
    }

    getCocktailById(id: string): Observable<Cocktail> {
        return this.http.get(this.BASE_URL + '/lookup.php?i=' + id).pipe(
            filter( (data: any) => data.drinks != null),
            map( (data: any) => ({
                id: data.drinks[0].idDrink,
                name: data.drinks[0].strDrink,
                description: data.drinks[0].strInstructions,
                alcoholic: data.drinks[0].strAlcoholic === 'Alcoholic',
                img: data.drinks[0].strDrinkThumb
            }) )
        )
    }

    getCocktailsWith(): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cocktails: Cocktail[]) => cocktails.filter( (el: Cocktail) => el.alcoholic ))
        )
    }

    getCocktailsWithout(): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cocktails: Cocktail[]) => cocktails.filter( (el: Cocktail) => ! el.alcoholic ))
        )
    }

    getCocktailsContains(search: string): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cocktails: Cocktail[]) => cocktails.filter( (el: Cocktail) => el.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0 ))
        )
    }

    getCocktailsFirstLetter(letter: string): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cocktails: Cocktail[]) => cocktails.filter( (el: Cocktail) => el.name.toLocaleLowerCase()[0] === letter.toLocaleLowerCase() ) )
        )
    }

    getCocktailsBeginWith(begin: string): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cocktails: Cocktail[]) => cocktails.filter( (el: Cocktail) => el.name.toLocaleLowerCase().indexOf(begin.toLocaleLowerCase()) === 0 ) )
        )
    }

    protected obj2ArrayCocktail(obj: any): Cocktail[] {
        return obj.drinks.map( (el: any): Cocktail =>
            ({
                id: el.idDrink,
                name: el.strDrink,
                description: el.strInstructions,
                alcoholic: el.strAlcoholic === 'Alcoholic',
                img: el.strDrinkThumb
            })
        )
    }
}
