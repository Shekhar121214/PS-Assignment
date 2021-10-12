import { Component, OnInit } from '@angular/core';
import { ExporterService } from '../service/exporter.service';

@Component({
  selector: 'app-start-pause',
  templateUrl: './start-pause.component.html',
  styleUrls: ['./start-pause.component.scss']
})
export class StartPauseComponent implements OnInit {
  
  currentState!:string;
  startCount = 0;
  pauseCount = 0
  constructor(private exporterService: ExporterService) { }

  ngOnInit(): void {
    this.exporterService.getTimerCondn$.subscribe(sate => {
      this.currentState = sate;
      if(this.currentState === 'start'){
        this.startCount += 1;
     } 
     if(this.currentState === 'pause'){
      this.pauseCount += 1;
     }
    });
  }

}
