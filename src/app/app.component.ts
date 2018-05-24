import { Component } from '@angular/core';
import { IsStarredObject } from './likes/likes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // userInput: string;


  // post = {
  //   title: 'Title',
  //   isStarred: true
  // };

  // onFavoriteChanged(isStarred: IsStarredObject) {
  //   console.log('CHANGES!', isStarred);
  // }


  // heart = {
  //   liked: true,
  //   count: 10
  // };


  // courses = [1, 2];


  // viewMode = 'map';


  // meals;

  // addItem() {
  //   const newItem = {
  //     appetizer: 'wings',
  //     entree: 'specialty pizza',
  //     dessert: 'pizookie',
  //     canRemove: false
  //   };
  //   this.meals.push(newItem);
  // }

  // removeItem(mealIndex) {
  //   this.meals.splice(mealIndex, 1);
  // }

  // loadMenu() {
  //   this.meals = [
  //     {
  //       appetizer: 'calimari',
  //       entree: 'steak',
  //       dessert: 'flan',
  //       canRemove: true
  //     },
  //     {
  //       appetizer: 'onion rings',
  //       entree: 'hamburger',
  //       dessert: 'pie',
  //       canRemove: false
  //     },
  //     {
  //       appetizer: 'crab cakes',
  //       entree: 'endless shrimp',
  //       dessert: 'lemon cake',
  //       canRemove: true
  //     }
  //   ];
  // }

  // trackMeals(index, meal) {
  //   return meal ? meal.entree : undefined;
  // }


  // task = {
  //   title: 'Do it',
  //   assignee: {
  //     name: 'quang' /* null */
  //   }
  // };
}
