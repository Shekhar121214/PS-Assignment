import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  @Output() timeEmmiter:EventEmitter<number>
  = new EventEmitter<number>();

  @Output() timerState:EventEmitter<string>
  = new EventEmitter<string>();

  deviceForm!: FormGroup;
  currentState = 'pause';
  constructor() {}
  timer!: number;
  isPuased = false;
  firstTimeTimerStart = true;
  pauseAt: number[] = [];

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.deviceForm = new FormGroup({
      initialTime: new FormControl('')
    });
  }

  btnHandler(ev: string){
    const enteredValue = this.deviceForm.controls.initialTime.value;
    if(!enteredValue || enteredValue <= 0) return alert('please enter the valid number');
    if(isNaN(enteredValue)) return alert('Only numbers are allowed');
    if(ev === 'reset'){
      this.currentState = 'pause';
      this.firstTimeTimerStart = true;
      this.timer = this.deviceForm.controls.initialTime.value;
      this.isPuased = true;
      this.timeEmmiter.emit(this.timer)
      clearInterval(this.timer)   
    } else {
      this.currentState = this.currentState === 'start' ? 'pause' : 'start';
      this.timerState.emit(this.currentState);
      this.callTimer();
    }
  }

  callTimer(){   
    if(this.currentState === 'start' && this.firstTimeTimerStart){
      this.timer = this.deviceForm.controls.initialTime.value;
      this.firstTimeTimerStart = false;
     const contDown =  setInterval(()=>{
      if(!this.isPuased){
        if(this.timer === 0){
          clearInterval(contDown);
          return;
        }
        this.timer--
      }
        this.timeEmmiter.emit(this.timer)
      },1000)
    }

    if(this.currentState === 'pause'){
      this.isPuased  = true;
      this.pauseAt.push(this.timer);
    }
    if(this.currentState === 'start'){
      this.isPuased  = false;
    }
  }

  

}
