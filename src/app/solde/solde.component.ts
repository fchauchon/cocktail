import { FinanceService } from './../finance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.css']
})
export class SoldeComponent implements OnInit {

    solde: number = 0
    constructor(private financeService: FinanceService) { }

    ngOnInit(): void {
        this.solde = this.financeService.afficherSolde()
    }

    onSoldeChange(changed: any) {
        console.log(changed)
        this.solde = this.financeService.afficherSolde()
    }
}
