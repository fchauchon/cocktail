import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

    getCocktailById(id: string): Observable<Cocktail[]> {
        return this.http.get(this.BASE_URL + '/lookup.php?i=' + id).pipe(
            map( (data: any) => this.obj2ArrayCocktail(data) )
        )
    }

    getCocktailsWithAlcool(): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cockails: Cocktail[]) => cockails.filter( (el: Cocktail) => el.alcoholic ))
        )
    }

    getCocktailsWithoutAlcool(): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cockails: Cocktail[]) => cockails.filter( (el: Cocktail) => ! el.alcoholic ))
        )
    }

    getCocktailsContains(search: string): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cockails: Cocktail[]) => cockails.filter( (el: Cocktail) => el.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0 ))
        )
    }

    getCocktailsBegin(letter: string): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cockails: Cocktail[]) => cockails.filter( (el: Cocktail) => el.name.toLocaleLowerCase().indexOf(letter.toLocaleLowerCase()) === 0 ))
        )
    }

    protected obj2ArrayCocktail(obj: any): Cocktail[] {
        const arr = obj['drinks']
        return arr.map( (el: any) => {
            const c: Cocktail = {
                id: el.idDrink,
                name: el.strDrink,
                description: el.strInstructions,
                img: el.strDrinkThumb,
                alcoholic: el.strAlcoholic === 'Alcoholic'
            }
            return c
        })
    }
}
