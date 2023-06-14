import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersComponent } from './suppliers.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';


@NgModule({
  declarations: [
    SuppliersComponent,
    CreateSupplierComponent,
    ViewSupplierComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ]
})
export class SuppliersModule { }
