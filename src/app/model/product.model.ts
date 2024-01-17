export class Product{

    public id: number;
    public name: string;
    public imageUrl: string;
    public price : number;
    public category: string;
    public brand : string;
    
    constructor(id?: number,name?: string, imageUrl?: string, price?: number,  category?: string,brand?: string){
          this.id = id || 0;
          this.name = name || '';
          this.imageUrl = imageUrl || '';
          this.price = price || 0;
          this.category = category || '';
          this.brand = brand || '';
    }
  }