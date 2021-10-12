import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-route',
  templateUrl: './first-route.component.html',
  styleUrls: ['./first-route.component.scss']
})
export class FirstRouteComponent implements OnInit, OnDestroy {

  divsPropArray = [{ ht: 70, wd: 300 }];
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void{
      for(let item of new Array(6)){
        const lastObj = this.divsPropArray[this.divsPropArray.length - 1];
        const {ht, wd} = lastObj
        const newHt = ht + 20;
        const neWd = wd + 20;
        this.divsPropArray.push({ ht: newHt, wd: neWd })
      }
  }

  ngOnDestroy(){
    this.loadData();
  }

}
