import { Injectable } from '@angular/core';
import {Pizza} from "../../shared/models/Pizza";
import {PizzaTags} from "../../shared/models/PizzaTags";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }
  getAllPizzaTags():PizzaTags[]{
    return [
      {name: 'All', count: 11},
      {name: 'Pizza', count: 6},
      {name: 'Pasta', count: 5},
    ];
  }

  getAllPizzaByTag(pizzaTag: string): Pizza[]{
    //return pizzaTag == "All" ? this.getAll():this.getAll().filter(pizza => pizza.tags?.includes(pizzaTag));
    if(pizzaTag == "All")
      return this.getAll();
    else
      return this.getAll().filter(pizza => pizza.pizzaTags?.includes(pizzaTag));
  }
  getAllPizzaBySearchTerm(searchTerm:string) : Pizza[] {
    return this.getAll().filter(pizza => pizza.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  scrollToPizzaList() {
    const pizzaListElement = document.querySelector('.pizza-list-image');
    if (pizzaListElement) {
      pizzaListElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  getPizzaById(id: number): Pizza{
    return this.getAll().find(value => value.id == id)!;
  }

  getAll():Pizza[]{
    return[
      {
        id:1,
        name:'Pizza Margherita',
        ingredient: ['Tomato sauce',' Mozzarella',' Basil'],
        price: 7.70,
        favorite: true,
        stars:4,
        pizzaTags: ['Pizza'],
        imageUrl:'/assets/images/pizza/pizza-1.jpg',
      },
      {
        id:2,
        name:'Pizza Salami',
        ingredient: ['Tomato sauce',' Salami',' Cheese'],
        price: 9.5,
        favorite: false,
        stars:3.6,
        pizzaTags: ['Pizza'],
        imageUrl:'/assets/images/pizza/pizza-2.jpg',
      },
      {
        id:3,
        name:'Pizza Funghi',
        ingredient: ['Fresh chestnut mushrooms',' Cheese'],
        price: 10,
        favorite: true,
        stars:4.5,
        pizzaTags: ['Pizza'],
        imageUrl:'/assets/images/pizza/pizza-3.jpg',
      },
      {
        id:4,
        name:'Pizza Hawaii',
        ingredient: ['Shoulder of Beef',' Pineapple',' Cheese'],
        price: 8.70,
        favorite: false,
        stars:3.7,
        pizzaTags: ['Pizza'],
        imageUrl:'/assets/images/pizza/pizza-4.jpg',
      },
      {
        id:5,
        name:'Pizza Tonno',
        ingredient: ['Tuna',' Onions',' Cheese'],
        price: 10.50,
        favorite: true,
        stars:4.7,
        pizzaTags: ['Pizza'],
        imageUrl:'/assets/images/pizza/pizza-5.jpg',
      },
      {
        id:6,
        name:'Pizza Vegetariana',
        ingredient: ['Mozzarella',' Grilled vegetables',' Olive'],
        price: 10.80,
        favorite: true,
        stars:4.7,
        pizzaTags: ['Pizza'],
        imageUrl:'/assets/images/pizza/pizza-6.jpg',
      },
      {
        id:7,
        name:'Pesto Penne',
        ingredient: ['Cherry Tomatoes',' Crispy garlic',' Pesto'],
        price: 11.50,
        favorite: true,
        stars:4.5,
        pizzaTags: ['Pasta'],
        imageUrl:'/assets/images/pizza/pasta-1.jpg',
      },
      {
        id:8,
        name:'lasagna',
        ingredient: ['Tomato sauce',' Ground beef',' Cheese'],
        price: 9.00,
        favorite: false,
        stars:3.5,
        pizzaTags: ['Pasta'],
        imageUrl:'/assets/images/pizza/pasta-2.jpg',
      },
      {
        id:9,
        name:'Tortellini alla panna',
        ingredient: ['Ham steak',' heavy cream',' parmesan'],
        price: 10.50,
        favorite: false,
        stars:3.7,
        pizzaTags: ['Pasta'],
        imageUrl:'/assets/images/pizza/pasta-3.jpg',
      },
      {
        id:10,
        name:'Shrimp Scampi',
        ingredient: ['Shrimp',' linguine (gluten-free)'],
        price: 11.50,
        favorite: true,
        stars:5,
        pizzaTags: ['Pasta'],
        imageUrl:'/assets/images/pizza/pasta-4.jpg',
      },
      {
        id:11,
        name:'Spaghetti Bolognese',
        ingredient: ['Mozzarella',' Ground Beef',' Tomato sauce'],
        price: 11.90,
        favorite: true,
        stars:4,
        pizzaTags: ['Pasta'],
        imageUrl:'/assets/images/pizza/pasta-5.jpg',
      },

    ]
  }


}
