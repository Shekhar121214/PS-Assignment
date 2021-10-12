import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-route',
  templateUrl: './fourth-route.component.html',
  styleUrls: ['./fourth-route.component.scss']
})
export class FourthRouteComponent implements OnInit {
  initiateTime!: number;
  currentState!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
