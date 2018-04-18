import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginGuard } from './login-guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UnsavedChangesGuard } from './unsaved-changes-guard';
import { DataComponent } from './data/data.component';
import { DataResolver } from './data-resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'product',
    component: ProductDetailComponent,
    canActivate: [LoginGuard],
    canDeactivate: [UnsavedChangesGuard]
  },
  {
    path: 'mydata',
    component: DataComponent,
    resolve: {
      loadedJsonData: DataResolver
      // loadedJsonData: DataResolverCache
    },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
