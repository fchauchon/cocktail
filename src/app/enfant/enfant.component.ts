import { FinanceService } from './../finance.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
    @Input() prenom: string = ''
    @Output() soldeChange = new EventEmitter()

    constructor(private financeService: FinanceService) { }

    ngOnInit(): void {
    }

    depenser() {
        this.financeService.retirer()
        this.soldeChange.emit('gljkfdglmdfjgkl')
    }
}
