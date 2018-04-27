import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class ProductService {
  abstract getProduct(): Product;
}
