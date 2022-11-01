import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Subject, take, takeUntil } from 'rxjs';
import { CommunicationService } from 'src/app/communication.service';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.css']
})
export class ListenerComponent implements OnInit {

  data: string = ''
  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.communicationService.onData().subscribe(
      val => this.data = val
    )
  }

}
