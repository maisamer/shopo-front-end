import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit{
  orders : any[] | undefined;
  constructor(private orderService:OrderService){}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(reponse=>{
      console.log(reponse.body);
      this.orders = (reponse.body as any).data;
    })
  }


}

