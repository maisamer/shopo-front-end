import { Component, OnInit } from '@angular/core';
import { CartItems } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  products : Product[] = [];

  ngOnInit(): void {
    let cartItems : CartItems =  JSON.parse(sessionStorage.getItem('cart')!);
    if(cartItems){
      this.products = Object.values(cartItems);
    }
    console.log(this.products);
  }

  getProductUrl(product:any){
    return "../../../assets/images/"+product.imageUrl;
  }
}
