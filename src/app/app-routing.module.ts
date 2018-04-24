import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginGuard } from './login-guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UnsavedChangesGuard } from './unsaved-changes-guard';
import { DataComponent } from './data/data.component';
import { DataResolver } from './data-resolver';
import { ChatComponent } from './chat/chat.component';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chat',
    component: ChatComponent,
    outlet: 'aux'
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
  },
  {
    path: 'luxury',
    loadChildren: './luxury/luxury.module#LuxuryModule',  // lazy loading
    data: {
      preloadme: true
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      // preloadingStrategy: PreloadAllModules,
      preloadingStrategy: CustomPreloadingStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
