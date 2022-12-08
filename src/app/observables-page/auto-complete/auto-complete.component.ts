import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, filter, switchMap, tap } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

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
      this.searchControl.valueChanges.pipe(
          filter( chaine => chaine.length >= 3),
          debounceTime(1000),
          tap( chaine => console.log(chaine)),
          switchMap( chaine => this.dataService.searchCocktailsByName(chaine))
      ).subscribe(
          data => this.suggestions = data
    )
    }

}
