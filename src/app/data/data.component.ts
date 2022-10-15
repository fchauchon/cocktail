import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit, OnDestroy {

    isHidden: boolean = false;
    title: string = 'data'
    titleClass: any = { 'font-style': 'italic' }

    body: string = 'Je suis le body'
    bodyStyles: any = {}

    inputValue: string = ''
    
    constructor() {
        console.warn('Constructor')
    }

    ngOnInit(): void {
        this.titleClass.gras = true;
        this.inputValue = 'Input value';
    }

    onClick() {
        this.isHidden = ! this.isHidden
    }

    ngOnDestroy(): void {
    }
}
