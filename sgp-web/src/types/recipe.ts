import type { Ingredient } from "./ingredient";

export interface Recipe {
  recipeId: number;
  name: string;
  salePrice: number;
  yieldUnits: number;
  preparationTime: number;
  ingredients: Ingredient[];
}