import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product-service';

@Injectable()
export class RealProductService extends ProductService {

  constructor(private http: HttpClient) {
    super();
    // how to assign json to class object? chapter 7
    // http.get<Product>('./assets/products.json').subscribe(data => console.log(data));
  }

  getProduct(): Product {
    return new Product(0, 'iPhone 7', 249.99, 'The latest iPhone, 7-inch screen');
  }

}
