import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-route',
  templateUrl: './second-route.component.html',
  styleUrls: ['./second-route.component.scss']
})
export class SecondRouteComponent implements OnInit {

  productsArr = [{price : 100}]
  chosenMode : string = 'low';

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void{
    for(let item of new Array(40)){
      const lastObj = this.productsArr[this.productsArr.length - 1];
      const newPrice= lastObj['price'] + 20;
      this.productsArr.push({ price: newPrice})
    }
}

changeView(ev: string){
  const rptProp = ev === 'grid' ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)';
 const dd: any = document.getElementById("wrapper");
 dd.style.gridTemplateColumns = rptProp;
}

filterData(){
  if(this.chosenMode === 'high'){
    this.productsArr.sort((a, b) => b.price - a.price);
  } else {
    this.productsArr.sort((a, b) => a.price - b.price);
  }
}

}
