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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductDetailComponent,
    HomeComponent,
    DataComponent
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
    DataResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
