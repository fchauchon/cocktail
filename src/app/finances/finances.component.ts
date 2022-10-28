import { FinanceService } from '../finance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css']
})
export class FinancesComponent implements OnInit {

    balance: number = 0
    actions: Array<any>

    constructor(private financeService: FinanceService) {
        this.actions = new Array<any>()
    }

    ngOnInit(): void {
        this.refreshBalance()
    }

    onBalanceChange(data: any) {
        this.actions.push(data)
        this.refreshBalance()
    }

    refreshBalance() {
        this.balance = this.financeService.getBalance()
    }
}
