import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from './smart-data-table';

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.component.html',
  styleUrls: ['./cancelled.component.css']
})
export class CancelledComponent implements OnInit {

  source2: LocalDataSource;
  constructor() {
    this.source2 = new LocalDataSource(tableData.data); // create the source
  }
  settings2 = tableData.settings2;



  ngOnInit() {
  }

}
