import {Component, Input, OnInit} from '@angular/core';
import {Cart} from "../shared/models/Cart";
import {CartService} from "../services/cart/cart.service";
import {CartItem} from "../shared/models/CartItem";
import {PizzaService} from "../services/pizza/pizza.service";

@Component({
  selector: 'app-cart-pageable',
  templateUrl: './cart-pageable.component.html',
  styleUrls: ['./cart-pageable.component.css']
})
export class CartPageableComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService: CartService) {


    this.setCart();
  }
  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.pizza.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString: string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.pizza.id, quantity);
    this.setCart();
  }


}
