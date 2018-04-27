import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'ng-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // create an instance of ProductService when the ProductComponent is created.
  // providers: [
  //   {
  //     provide: ProductService,
  //     useClass: ProductService
  //   }
  // ]
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(@Inject(ProductService) productService) {
    this.product = productService.getProduct();
  }
  // constructor(productService: ProductService) {
  //   this.product = productService.getProduct();
  // }

  ngOnInit() {
  }

}
