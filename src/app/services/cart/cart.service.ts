import { Injectable } from '@angular/core';
import {Cart} from "../../shared/models/Cart";
import {Pizza} from "../../shared/models/Pizza";
import {CartItem} from "../../shared/models/CartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();
  addToCart(pizza: Pizza):void{
    let cartItem = this.cart.items.find(item => item.pizza.id === pizza.id);
    if(cartItem){
      this.changeQuantity(pizza.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(pizza));
  }

  removeFromCart(pizzaId:number):void{
    this.cart.items = this.cart.items.filter(item => item.pizza.id !=pizzaId);
  }
  changeQuantity(pizzaId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.pizza.id === pizzaId);
    if(!cartItem)
      return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
  constructor() { }
}
