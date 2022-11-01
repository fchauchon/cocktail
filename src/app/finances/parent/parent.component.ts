import { FinanceService } from './../../finance.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    @Output() balanceChange = new EventEmitter()
    constructor(private finance: FinanceService) { }

    ngOnInit(): void {
    }

    addMoney() {
        this.finance.addMoney()
        this.balanceChange.emit( { from: "Parents", amount: 100} )
    }
}
