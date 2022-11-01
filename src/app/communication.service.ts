import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  //protected queueData: Subject<string> = new Subject<string>()
  protected queueData: BehaviorSubject<string> = new BehaviorSubject<string>('Init val')

  constructor() { }

  pushData(data: string) {
    this.queueData.next(data)
  }

  onData(): Observable<string> {
    return this.queueData.asObservable()
  }
}
