import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login-guard';
import { ReactiveFormsModule } from '@angular/forms';
import { UnsavedChangesGuard } from './unsaved-changes-guard';
import { DataComponent } from './data/data.component';
import { DataResolver } from './data-resolver';
import { HttpClientModule } from '@angular/common/http';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ChatComponent } from './chat/chat.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';
import { ProductComponent } from './product/product.component';
import { RealProductService } from './real-product.service';
import { MockProductComponent } from './mock-product/mock-product.component';
import { ProductService } from './product-service';
import { productServiceFactory } from './product.factory';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductDetailComponent,
    HomeComponent,
    DataComponent,
    ChatComponent,
    ProductComponent,
    MockProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [
    LoginGuard,
    UnsavedChangesGuard,
    DataResolver,
    CustomPreloadingStrategy,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    // {
    //   provide: ProductService,
    //   useClass: RealProductService
    // },
    {
      provide: ProductService,
      useFactory: productServiceFactory,
      deps: ['IS_PROD_ENVIRONMENT']
    },
    {
      provide: 'IS_PROD_ENVIRONMENT',
      useValue: environment.production
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
