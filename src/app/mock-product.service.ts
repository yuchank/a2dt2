import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class MockProductService {

  constructor() {
  }

  getProduct(): Product {
    return new Product(0, 'Samsung 7', 199.99, 'The latest Android, 7-inch screen');
  }

}
