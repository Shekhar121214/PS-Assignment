import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit,OnChanges {

  @Input() currentState!:string;
  logs: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    const currentTime = this.getDateTime();
    if(this.currentState === 'start'){
       this.logs.push(`Started at ${currentTime}`)
    } 
    if(this.currentState === 'pause'){
      this.logs.push(`Paused at ${currentTime}`)
    }
  }

  getDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month: number | string = now.getMonth() + 1;
    let day: number | string = now.getDate();
    let hour: number | string = now.getHours();
    let minute: number | string = now.getMinutes();
    let second: number | string = now.getSeconds();
    if (month.toString().length == 1) {
      month = '0' + month;
    }
    if (day.toString().length == 1) {
      day = '0' + day;
    }
    if (hour.toString().length == 1) {
      hour = '0' + hour;
    }
    var ampm = hour >= 12 ? 'pm' : 'am';
    if (minute.toString().length == 1) {
      minute = '0' + minute;
    }
    if (second.toString().length == 1) {
      second = '0' + second;
    }
    const dateTime = `${day}-${month}-${year} ${hour}:${minute}:${second} ${ampm} `
    return dateTime;
  }

}
