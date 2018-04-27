import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  product: Product;

  constructor() { }

  getProduct(): Product {
    return this.product;
  }

}
