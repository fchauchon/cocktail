import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    logoPath: string = 'assets/logo.svg'
    message: string = ''

    constructor(private communicationService: CommunicationService) { }

    ngOnInit(): void {
        this.communicationService.onData().subscribe(
          (message) => this.message = message
        )
    }

}
