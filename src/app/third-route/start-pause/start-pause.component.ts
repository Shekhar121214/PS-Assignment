import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-start-pause',
  templateUrl: './start-pause.component.html',
  styleUrls: ['./start-pause.component.scss']
})
export class StartPauseComponent implements OnInit,OnChanges {

  @Input() currentState!:string;

  startCount = 0;
  pauseCount = 0
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.currentState);
    if(this.currentState === 'start'){
      this.startCount += 1;
   } 
   if(this.currentState === 'pause'){
    this.pauseCount += 1;
   }
  }

}
