import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: "full" },
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: 'products/:category/:categoryId', loadChildren: () => import('./pages/products-list/products-list.module').then(m => m.ProductsListModule) },
  { path: 'product-details/:productId', loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsModule) },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
