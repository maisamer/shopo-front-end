import { Brand } from "./brand.model";

export class Product {

      public id: number;
      public name: string;
      public imageUrl: string;
      public price: number;
      public category: string;
      public brand: Brand;
      public quantity: number;
      public stock: number;
      public currency: Currency;

      constructor(id?: number, name?: string, imageUrl?: string, price?: number, category?: string, brand?: Brand, 
            stock?: number,currency?:Currency) {
            this.id = id || 0;
            this.name = name || '';
            this.imageUrl = imageUrl || '';
            this.price = price || 0;
            this.category = category || '';
            this.brand = brand || Object();
            this.quantity = 0;
            this.stock = stock || 0;
            this.currency = currency || Currency.NON;
      }
}

enum Currency {
      NON = "NON",
      EGP = "EGP",
      USD = "USD",
      EUR = "EUR",
      GBP = "GBP",
      JPY = "JPY",
}