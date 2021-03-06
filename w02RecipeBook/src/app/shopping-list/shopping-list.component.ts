import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;


  constructor(private slService: ShoppingListService) { }

  ngOnInit()  {
  this.ingredients = this.slService.getIngredients();
  this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )

  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  

}
