import {Component, Input, OnInit} from '@angular/core';
import {PizzaTags} from "../shared/models/PizzaTags";
import {PizzaService} from "../services/pizza/pizza.service";

@Component({
  selector: 'app-pizza-tags',
  templateUrl: './pizza-tags.component.html',
  styleUrls: ['./pizza-tags.component.css']
})
export class PizzaTagsComponent implements OnInit {


@Input()
  pizzaPageTags?:string[];

@Input()
  justifyContent:string = 'center';


pizzaTags?:PizzaTags[];




  constructor(private pizzaService:PizzaService) { }

  ngOnInit(): void {
    if(!this.pizzaPageTags)
      this.pizzaTags = this.pizzaService.getAllPizzaTags();
  }
}
