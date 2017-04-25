import { Injectable } from '@angular/core';
import  { Recipe } from '../recipe';
import  { Ingredient } from '../shared/ingredient';


@Injectable()
export class RecipeService {
	private  recipes: Recipe[] = [
   new Recipe( 'Ensaimada' , 'sweet', 'http://mallorca.ezebee.com/wp-content/uploads/2016/08/ensaimada_palma-1.jpg', [
   		new Ingredient('Flour', 500),
   		new Ingredient('Sugar', 200),
   		new Ingredient('Lard', 100),
   		new Ingredient('Yeast', 1),

   	] ),
   new Recipe( 'Lasagna' , 'Melted Cheese', 'http://assets.kraftfoods.com/recipe_images/opendeploy/88326-e5ff7f4500adac20f21c3beec343a2fa1016ac79_642x428.jpg', [] )
  ];

  constructor() { }

  getRecipes(){
  	return this.recipes;
  }
  getRecipe(id:number){
    return this.recipes[id];

  }

}
