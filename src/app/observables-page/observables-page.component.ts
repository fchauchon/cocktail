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

    constructor() { }

    ngOnInit(): void { }
}
