import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PizzaPageableComponent} from "./pizza-pageable/pizza-pageable.component";
import {CartPageableComponent} from "./cart-pageable/cart-pageable.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:pizzaTag', component:HomeComponent},
  {path:'pizza/:id', component:PizzaPageableComponent},
  {path:'cart-pageable', component: CartPageableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
