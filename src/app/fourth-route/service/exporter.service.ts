import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExporterService {

  constructor() { }

  private sendTimerCondn = new BehaviorSubject('');
  public getTimerCondn$= this.sendTimerCondn.asObservable();

  private sendTimer: any = new BehaviorSubject(null);
  public getTimer$= this.sendTimer.asObservable();

  setTimerCondn(data: string){
    this.sendTimerCondn.next(data);
  }

  setTimer(data: number){
    this.sendTimer.next(data);
  }
}
