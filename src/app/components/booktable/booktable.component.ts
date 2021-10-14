import { Component } from '@angular/core';

import { TableDataService } from '../../../services/tableService';

@Component({
  selector: 'book-table',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css'],
  providers: [TableDataService]
})
export class Booktable  {
    tableData: any;
    booked: number;
    available: number;
    totalTables: number;
    totalCost: number;
    filterTables: any;
    filterargs: any;

    tableResponse: any;

  constructor(private tableServiceData: TableDataService) {
    this.tableServiceData.getTables().subscribe(res => {
        if(res) {
        this.tableResponse = res;
        }
      });

    this.filterTables =[{
      name: 'All'
    },
    {
      name: 'Reserved'
    },
    {
      name: 'Available'
    }];

    this.filterargs = this.filterTables[0];
    //let data = localStorage.getItem('tableData');
    //this.tableData = JSON.parse(data);
    this.totalTables = this.tableResponse ? this.tableResponse.length :0;

    let bookedData = this.tableResponse.filter(x => x.reservationStatus);
    this.booked = bookedData.length;
    this.available = this.totalTables - this.booked;

   }

   reserveTable (table) {
     localStorage.setItem('selectedTableNumber', table.tableNumber);
     localStorage.setItem('selectedTableId', table._id);
   }

   resetTable (number) {

    //  const filteredIndex =this.tableData.findIndex(x => x.number === number);

    //  const savedHistory = JSON.parse(localStorage.getItem('history'));

    //  const currentHistory = [{
    //   date: new Date().toLocaleDateString(),
    //   bookedTime: this.tableData[filteredIndex].bookedTime,
    //   vacatedTime: new Date().toLocaleTimeString(),
    //   tableNumber: localStorage.getItem('selectedTableNumber'),
    //   cost: this.tableData[filteredIndex].totalCost,
    //  }];

    //  const history = savedHistory ? savedHistory.concat(currentHistory) : currentHistory;
    //  this.tableData[filteredIndex].totalCost = 0;
    //  this.tableData[filteredIndex].status = false;
    //  this.tableData[filteredIndex].orderSummary =[];



    //  let bookedData = this.tableData.filter(x => x.status);
    //  this.booked = bookedData.length;
    //  this.available = this.totalTables - this.booked;
    //  localStorage.setItem('tableData', JSON.stringify(this.tableData));
    //  localStorage.setItem('history', JSON.stringify(history));
     
   }
    
 

}
