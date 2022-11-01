import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit, OnDestroy {

    @Input() cocktail: any
    @Output() eventOut = new EventEmitter<string>()
    isHidden: boolean = false;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    onClick() {
        this.eventOut.emit(this.cocktail.name)
    }

    onClickDetail() {
      console.log('hr')
        this.router.navigate(['/cocktails', this.cocktail.id, 'detail'])
    }

    ngOnDestroy(): void {
    }
}
