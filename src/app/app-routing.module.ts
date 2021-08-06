

import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductComponent },
  { path: '', component: ProductComponent },
];

//si route defini mais pas utiliser router : ne marche pas 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
