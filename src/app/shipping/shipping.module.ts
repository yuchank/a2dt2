import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShippingComponent } from './shipping.component';
import { ShippingService } from './shipping-service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShippingComponent
      }
    ])
  ],
  declarations: [ShippingComponent],
  providers: [ShippingService]
})
export class ShippingModule { }
