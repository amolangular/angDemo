import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessGuard } from './guards/can-access.guard';

const routes: Routes = [
  { path: 'suppliers', loadChildren: () => import('./suppliers/suppliers.module').then(m => m.SuppliersModule) },
  { path: 'consumers', loadChildren: () => import('./consumers/consumers.module').then(m => m.ConsumersModule),canActivate:[CanAccessGuard],canLoad:[CanAccessGuard] },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:'',redirectTo:'/suppliers',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
