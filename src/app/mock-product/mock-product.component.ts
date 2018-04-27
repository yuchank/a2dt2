import { Component, OnInit, Inject } from '@angular/core';
import { RealProductService } from '../real-product.service';
import { MockProductService } from '../mock-product.service';
import { Product } from '../product';
import { ProductService } from '../product-service';

@Component({
  selector: 'ng-mock-product',
  templateUrl: './mock-product.component.html',
  styleUrls: ['./mock-product.component.css'],
  // create an instance of ProductService when the MockProductComponent is created.
  providers: [
    {
      provide: ProductService,
      useClass: MockProductService
    }
  ]
})
export class MockProductComponent implements OnInit {
  product: Product;

  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }

  ngOnInit() {
  }

}
