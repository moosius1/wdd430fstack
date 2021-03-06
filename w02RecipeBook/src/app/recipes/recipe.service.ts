import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
    

    // private recipes: Recipe[] = [
    //     new Recipe(
    //     'Tasty Schnitzel',
    //     'this is simply a test',
    //      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
    //      [

    //         new Ingredient('Meat', 1),
    //         new Ingredient('French Fries', 20)
    //      ]),

    //     new Recipe(
    //         'Burger Burger',
    //          'this is simply a test',
    //           'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/turkey-burger-horizontal-jpg-1533302738.jpg',
    //           [

    //             new Ingredient('Buns', 2),
    //             new Ingredient('Meat', 1)
    //           ])
      
    //   ];
    private recipes: Recipe[] = [];
      

    constructor(private slService: ShoppingListService){}

    setRecipes(recipes:Recipe[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
    }

  
    addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());

    }

    updateRecipe(index: number, newRecipe: Recipe){
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }


    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }

}