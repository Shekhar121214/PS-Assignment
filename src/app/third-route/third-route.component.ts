import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-route',
  templateUrl: './third-route.component.html',
  styleUrls: ['./third-route.component.scss']
})
export class ThirdRouteComponent implements OnInit {
  initiateTime!: number;
  currentState!: string;
  constructor() { }

  ngOnInit(): void {
  }
  getTimer(ev: number){
    this.initiateTime = ev;
  }

  getState(ev: string){
    this.currentState = ev;
  }

}
