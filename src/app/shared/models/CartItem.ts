import {Pizza} from "./Pizza";

export class CartItem{
  constructor(pizza:Pizza){
    this.pizza = pizza;
    this.price;
  }
  pizza: Pizza;
  quantity:number = 1;

  get price():number{
    return this.pizza.price * this.quantity;
  }
}
