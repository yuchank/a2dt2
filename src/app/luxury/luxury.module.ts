import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryComponent } from './luxury.component';
import { RouterModule } from '@angular/router';
import { LuxuryService } from './luxury-service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LuxuryComponent
      }
    ])
  ],
  declarations: [LuxuryComponent],
  providers: [LuxuryService]
})
export class LuxuryModule { }
