import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExporterService {

  constructor() { }

  private sendTimerCondn = new BehaviorSubject('');
  public getTimerCondn$= this.sendTimerCondn.asObservable();

  private sendTimer = new BehaviorSubject(0);
  public getTimer$= this.sendTimer.asObservable();

  setTimerCondn(data: string){
    console.log('cndn', data);
    this.sendTimerCondn.next(data);
  }

  setTimer(data: number){
    this.sendTimer.next(data);
  }
}
