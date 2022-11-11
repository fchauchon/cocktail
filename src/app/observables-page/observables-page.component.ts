import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, filter, interval, map, range, startWith, Subject, Subscription, switchMap, take, takeUntil, tap, toArray } from 'rxjs';
import { DataService } from '../data.service';

@Component({
    selector: 'app-observables-page',
    templateUrl: './observables-page.component.html',
    styleUrls: ['./observables-page.component.css']
})
export class ObservablesPageComponent implements OnInit {

    current: string = ''
    sub: Subscription | null = null
    stoooooop: Subject<string> = new Subject<string>()
    letters: string[] = []
    suggestions: string[] = []

    formGroup: UntypedFormGroup
    searchControl: FormControl<string>

    constructor(private dataService: DataService) {
        this.searchControl = new FormControl('', { nonNullable: true })
        this.formGroup = new UntypedFormGroup({
            search: this.searchControl
        })
    }

    ngOnInit(): void {
        range(1, 26).pipe(
            map( index => String.fromCharCode(index + 64)),
            toArray()
        ).subscribe(
            letters => this.letters = letters
        )

        this.searchControl.valueChanges.pipe(
            filter( chaine => chaine.length >= 3),
            debounceTime(1000),
            tap( chaine => console.log(chaine)),
            switchMap( chaine => this.dataService.searchCocktailsByName(chaine))
        ).subscribe(
            data => this.suggestions = data
        )
    }
  start() {
      this.sub = interval(500).pipe(
          takeUntil(this.stoooooop),
          map( val => val * 10),
          filter( val => val >= 30),
          map( val => 'Value ' + val),
          take(2)
      ).subscribe(
        val => this.current = val
      )
  }

  stop() {
      // if (this.sub) {
      //     this.sub.unsubscribe()
      // }
      this.stoooooop.next('Stop petit lapin')
  }
}
