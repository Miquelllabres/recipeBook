import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service' ;


import { Recipe } from '../recipe';
import { Ingredient } from '../shared/ingredient';
import { RecipeItemComponent } from '../recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  
 
 constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    
  }

}
