import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FinanceService {
    protected balance: number = 1000

    constructor() { }

    spendMoney() {
        this.balance -= 20
    }

    addMoney() {
        this.balance += 100
    }

    getBalance() {
        return this.balance
    }
}
