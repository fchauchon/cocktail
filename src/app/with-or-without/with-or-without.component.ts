import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-with-or-without',
  templateUrl: './with-or-without.component.html',
  styleUrls: ['./with-or-without.component.css']
})
export class WithOrWithoutComponent implements OnInit {

    cocktails: Array<any> = []

    constructor(
        private router: Router,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        if (this.router.url === '/with') {
            this.dataService.getCocktailsWith().subscribe(
                data => this.cocktails = data
            )
        } else {
            this.dataService.getCocktailsWithout().subscribe(
                data => this.cocktails = data
            )
        }
    }

}
