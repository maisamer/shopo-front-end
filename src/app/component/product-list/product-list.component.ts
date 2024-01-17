import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: any;
  constructor(private dataService:DataService){}
  
  ngOnInit(): void {
    this.dataService.getProducts().subscribe(
      responseData=>{
        console.log(responseData.body);
        this.products = (responseData.body as any).data;
      }
    )
  }

  getProductUrl(product:any){
    return "../../../assets/images/"+product.imageUrl;
  }

}
