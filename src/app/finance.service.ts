import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FinanceService {
    solde: number = 1000

    constructor() { }

    retirer() {
        this.solde -= 20
        console.log(this.solde)
    }

    crediter() {
        this.solde += 100
        console.log(this.solde)
    }

    afficherSolde() {
        return this.solde
    }
}
