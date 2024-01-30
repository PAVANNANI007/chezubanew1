import { Component, OnInit } from '@angular/core';
import { OrderLineService } from '../order-line.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-line-list',
  templateUrl: './order-line-list.component.html',
  styleUrls: ['./order-line-list.component.css'],
})
export class OrderLineListComponent implements OnInit {
  orderLines: any[] = [];
  type_id: number = 1; // Default value for type_id
  quantity: number = 1; // Default value for quantity
  displayedColumns: string[] = ['OrderLineID', 'OrderID', 'StockItemID', 'Description', 'PackageTypeID', 'Quantity', 'UnitPrice'];
  dataSource = new MatTableDataSource<any>(this.orderLines);

  constructor(private orderLineService: OrderLineService) {}

  ngOnInit(): void {
    this.loadOrderLines();
  }

  loadOrderLines() {
    this.orderLineService.getOrderLines(this.type_id, this.quantity).subscribe(
      (data) => {
        this.orderLines = data;
        this.dataSource.data = this.orderLines; // Update MatTableDataSource
      },
      (error) => {
        console.error(error);
        // Handle error as needed
      }
    );
  }
}
