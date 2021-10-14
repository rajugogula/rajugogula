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
    this.totalTables = this.tableResponse ? this.tableResponse.length :0;

    let bookedData = this.tableResponse ? this.tableResponse.filter(x => x.reservationStatus === 'Reserved') : [];
    this.booked = bookedData.length;
    this.available = this.totalTables - this.booked;
        }
      });
   }

   reserveTable (table) {
   const isEditOrder = table.reservationStatus === 'Reserved';
   const orderResponse = table.orderResponse ? JSON.stringify(table.orderResponse) : '';
     localStorage.setItem('selectedTableNumber', table.tableNumber);
     localStorage.setItem('selectedTableId', table._id);
     localStorage.setItem('isEditOrder', isEditOrder.toString());
     localStorage.setItem('orderResponse', orderResponse);
   }

   resetTable (number) {
     
   }
    
 

}
