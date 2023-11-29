import { FinanceService } from '../../finance.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
    @Input() firstname: string = ''
    @Output() balanceChange = new EventEmitter()

    constructor(private financeService: FinanceService) { }

    ngOnInit(): void {
    }

    spendMoney() {
        this.financeService.spendMoney()
        this.balanceChange.emit( { from: this.firstname, amount: -20 } )
    }
}
