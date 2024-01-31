import { Component, OnInit } from '@angular/core';
import { CartItems } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private cartItems: CartItems = {};

  products: Product[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(
      responseData => {
        console.log(responseData.body);
        this.products = (responseData.body as any).data;
      }
    )
  }

  getProductUrl(product: any) {
    return `../../../assets/images/${product.imageUrl}`
  }

  private saveCartToSession() {
    // Save cart items to sessionStorage
    window.sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  addItem(product: Product, quantity: number = 1) {
    this.cartItems = JSON.parse(sessionStorage.getItem('cart')!);
    
    if (!this.cartItems[product.id]) {
      console.log("here");
      this.cartItems[product.id] = { ...product, quantity: 0 };
    }

    this.cartItems[product.id].quantity! += quantity; // Increment quantity

    console.log("Product in cart:", this.cartItems[product.id]);
    console.log("Product in list:", product);

    this.saveCartToSession();
  }

}
