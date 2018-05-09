import { Component, OnInit } from '@angular/core';
import { ShippingService } from './shipping-service';

@Component({
  selector: 'ng-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingItem: string;

  constructor(private shippingService: ShippingService) { }

  ngOnInit() {
    this.shippingItem = this.shippingService.getShippingItem();
  }

}
