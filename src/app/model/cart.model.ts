import { Product } from "./product.model";

export interface CartItems {
    [productId: number]: Product;
  }