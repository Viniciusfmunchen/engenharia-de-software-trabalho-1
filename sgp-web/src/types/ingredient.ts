export type IngredientUnit = {
    name: string;
    symbol: string;
};

export type IngredientCategory = {
    name: string;
};

export interface Ingredient {
  ingredientId: number;
  name: string;
  category: IngredientCategory;
  measuringUnit: IngredientUnit;
  costPerUnit: number;
  stockQuantity: number;
  minStockQuantity: number;
}