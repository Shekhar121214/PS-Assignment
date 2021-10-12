import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ExporterService } from '../service/exporter.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  initiateTime!:number;

  constructor(private exporterService: ExporterService) { }

  ngOnInit(): void {
    this.exporterService.getTimer$.subscribe((timer: any) => {
      this.initiateTime = timer;
    });
  }

}
