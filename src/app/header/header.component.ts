import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    logoPath: string = 'assets/logo.svg'
    items: Array<any> = new Array<any>()

    constructor(private communicationService: CommunicationService) { }

    ngOnInit(): void {
        this.items.push( { name: 'Accueil', display: true })
        this.items.push( { name: 'Avec alcool', display: true })
        this.items.push( { name: 'Sans alcool', display: true })
        this.items.push( { name: 'Tous', display: false })

        this.communicationService.onData().subscribe(
          val => console.log(val)
        )
    }

}
