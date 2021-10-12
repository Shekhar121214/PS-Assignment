import { Component, OnDestroy, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-fifth-route',
  templateUrl: './fifth-route.component.html',
  styleUrls: ['./fifth-route.component.scss']
})
export class FifthRouteComponent implements OnInit, OnDestroy {

   gridColumnApi: any;

   columnDefs: any;
   defaultColDef: any;
   sideBar: any;
   rowGroupPanelShow: any;
   pivotPanelShow: any;
   rowData: any[] = [];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      { field: 'athlete' },
      { field: 'age' },
      { field: 'country' },
      { field: 'sport' },
      { field: 'year' },
      { field: 'date' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ];

    this.defaultColDef = {
      sortable: true,
      resizable: true,
      width: 150,
      enableRowGroup: true,
      enableValue: true,
    };
    this.rowGroupPanelShow = 'always';
    this.pivotPanelShow = 'always';
  }

  ngOnInit(): void {
  }

  onGridReady(params: any) {
    this.gridColumnApi = params?.columnApi;

    this.http.get('https://www.ag-grid.com/example-assets/olympic-winners.json').subscribe((data: any) => {
        this.rowData = data;
      });
  }

  ngOnDestroy(): void {
    this.onGridReady('');
  }

}
