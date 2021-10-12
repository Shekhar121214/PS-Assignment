import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-route',
  templateUrl: './sixth-route.component.html',
  styleUrls: ['./sixth-route.component.scss']
})
export class SixthRouteComponent implements OnInit, OnDestroy {
  numbersArray = Array.from(new Array(20), (x,i) => i+1);
  lastnumber = this.numbersArray[this.numbersArray.length - 1]

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.bottomReached()) {
      const nextArray = Array.from(new Array(20), (x,i) => (this.lastnumber + i)+1);
      this.numbersArray = [...this.numbersArray, ...nextArray];
      this.lastnumber = this.numbersArray[this.numbersArray.length - 1];
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  bottomReached(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }  

  btnClicked(index: number){
    const suffix = this.suffixHandler(index)
    alert(`Button in ${index}${suffix} div clicked.`)
  }

  suffixHandler(n: number){
    return["st","nd","rd"][((n+90)%100-10)%10-1] || "th"
  }

  ngOnDestroy(){
    this.numbersArray = [];
  }

}
