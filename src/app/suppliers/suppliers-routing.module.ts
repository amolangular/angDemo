import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersComponent } from './suppliers.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';

const routes: Routes = [
  { path: '', component: SuppliersComponent },
  {path:'create-supplier',component:CreateSupplierComponent},
  {path:'view-supplier',component:ViewSupplierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
