import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

    @Output() eventOut = new EventEmitter<string>()

    label: string = ''
    normal: boolean = true
    myClasses: any = {}

    constructor() { }

    ngOnInit(): void {
        this.label = this.normal ? 'Réduire' : 'Agrandir'
        this.manageState()
    }

    onClick() {
        this.normal = ! this.normal
        this.manageState()
        this.eventOut.emit(this.normal ? 'normal' : 'max')
    }

    manageState = () => {
        this.label = this.normal ? 'Réduire' : 'Agrandir'
        this.myClasses.reduit = ! this.normal
        this.myClasses.normal = this.normal
    }

}
