import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      name: 'Iphone',
      price: 2000
    },
    {
      name: 'Samsung',
      price: 2000
    },
    {
      name: 'Oppo',
      price: 2000
    }
  ];


  constructor() { }

  getAll(): Product[] {
    return this.products;
  }

  find(id: any): Product {
    return this.products[id];
  }

  store(product: Product): void {
    this.products.push(product);

  }
  update(id: number, product: Product): void {
    this.products[id] = product;
  }

  destroy(id: number): void {
    this.products.splice(id, 1);

  }
  search(q: any): Product[] {
    let results: Product[] = [];
    for (let product of this.products) {
      if (product.name == q) {
        results.push(product);
      }
    }
    return results;

  }
}
