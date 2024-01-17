import { Component, OnInit } from '@angular/core';
import {Pizza} from "../shared/models/Pizza";
import {ActivatedRoute, Router} from "@angular/router";
import {PizzaService} from "../services/pizza/pizza.service";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'app-pizza-pageable',
  templateUrl: './pizza-pageable.component.html',
  styleUrls: ['./pizza-pageable.component.css']
})
export class PizzaPageableComponent implements OnInit {

  pizza!: Pizza;
  constructor(private activateRoute: ActivatedRoute, private pizzaService: PizzaService,
              private cartService: CartService, private router: Router) {
    activateRoute.params.subscribe((params)=>{
      if(params['id'])
        this.pizza = pizzaService.getPizzaById(params['id']);
    })
  }

  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addToCart(this.pizza);
    this.router.navigateByUrl('/cart-pageable');
  }

}
