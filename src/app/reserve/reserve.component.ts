import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReserveDataService } from 'src/services/reserveService';
import { TableDataService } from 'src/services/tableService';

@Component({
  selector: 'reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
  providers: [ReserveDataService, TableDataService]
})
export class Reserve {

  tableData: any;
  tableNumber: number;
  tableId: string;
  orderSummary: any;
  totalCost: number;
  toggleFlag: boolean = false;
  tabIndex: number = 1;
  items: any;

  constructor(private router: Router, 
    private reserveService: ReserveDataService,
    private tableService: TableDataService
  ) { 

    //Get all the menu items
    this.reserveService.getMenu().subscribe((res) => {
      if(res) {
        this.items = res[0]
      }
    });

    let data = localStorage.getItem('tableData');
    this.tableNumber = parseInt(localStorage.getItem('selectedTableNumber'));
    this.tableId = localStorage.getItem('selectedTableId');
    this.tableData = JSON.parse(data);

    const filteredIndex = this.tableData.findIndex( x => x.number === this.tableNumber);

    this.orderSummary = this.tableData[filteredIndex].orderSummary.length > 0 ? this.tableData[filteredIndex].orderSummary : [];

    this.totalCost = this.tableData[filteredIndex].totalCost !== 0 ? this.tableData[filteredIndex].totalCost : 0 ;
  }

  collapsableTab (index) {
    this.toggleFlag = !this.toggleFlag
    this.tabIndex = index;
  }

  addOrder (item) {
    const index = this.orderSummary.findIndex(x => x.name ===item.name);

    if (index !== -1) {
      this.orderSummary[index].count = this.orderSummary[index].count + 1;
    } else {
      item.count = item.count + 1;
      this.orderSummary.push(item);
    }

    this.totalCost = this.totalCost + parseInt(item.cost);
  }

  deleteItem (item) {

    const index = this.orderSummary.findIndex(x => x.name === item.name);

    if (index !== -1) {
      this.orderSummary[index].count = this.orderSummary[index].count === 0 ?  
      this.orderSummary[index].count : this.orderSummary[index].count-1;
      if (this.orderSummary[index].count === 0) {
        this.orderSummary.splice(index, 1);
      }
    
      this.totalCost = this.totalCost - parseInt(item.cost);

    }
  }
     
      addOrderToTable () {
        if (this.totalCost === 0) return;

        const requestBody = {
          status: 'Reserved',
          orderDateTime: new Date().toLocaleTimeString(),
          tableNumber: this.tableNumber,
          orderItems: this.orderSummary,
          orderCost: this.totalCost
        };

        this.reserveService.createNewOrder(requestBody).subscribe((res) => {
          if(res) {
            this.tableService.updateTableById(this.tableId, {
              reservationStatus: requestBody.status,
              totalCost: requestBody.orderCost
            }).subscribe((res) => {
              if (res) {
                this.router.navigateByUrl('');
              }
            });
          }
        });
      }

      cancelOrder () {
        this.orderSummary = [],
        this.totalCost = 0;
      }
}
