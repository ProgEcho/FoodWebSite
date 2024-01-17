import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../services/pizza/pizza.service";
import {Pizza} from "../shared/models/Pizza";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  pizza:Pizza[] = [];

  constructor(private pizzaService: PizzaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']){
        this.pizza = this.pizzaService.getAllPizzaBySearchTerm(params['searchTerm']);


      }
      else if(params['pizzaTag']){
        this.pizza = this.pizzaService.getAllPizzaByTag(params['pizzaTag']);
      }
      else
        this.pizza = this.pizzaService.getAll();
      this.pizzaService.scrollToPizzaList();
    });
  }

}
