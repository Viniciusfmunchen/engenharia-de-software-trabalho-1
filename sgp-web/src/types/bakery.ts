export const ingredientUnits = ['g', 'ml', 'un'] as const;

export const ingredientCategories = [
  'farinha',
  'fermento',
  'tempero',
  'açucar',
  'liquido',
  'gordura',
  'vegetal',
  'grao',
  'recheio',
  'outro',
] as const;

export const paymentMethods = ['Pix', 'Cartão', 'Dinheiro'] as const;

export const purchaseStatuses = ['Recebida', 'Pendente'] as const;

export type IngredientUnit = (typeof ingredientUnits)[number];
export type IngredientCategory = (typeof ingredientCategories)[number];
export type PaymentMethod = (typeof paymentMethods)[number];
export type PurchaseStatus = (typeof purchaseStatuses)[number];

export interface Ingredient {
  id: number;
  name: string;
  category: IngredientCategory;
  unit: IngredientUnit;
  costPerUnit: number;
  stockQuantity: number;
  minStockQuantity: number;
}

export interface RecipeIngredient {
  ingredientId: number;
  quantity: number;
}

export interface BreadRecipe {
  id: number;
  name: string;
  salePriceInCents: number;
  yieldUnits: number;
  preparationTimeMinutes: number;
  ingredients: RecipeIngredient[];
}

export interface Sale {
  id: number;
  date: string;
  buyerName: string;
  recipeId: number;
  quantity: number;
  paymentMethod: PaymentMethod;
}

export interface Purchase {
  id: number;
  date: string;
  supplierName: string;
  ingredientId: number;
  quantity: number;
  unitCost: number;
  status: PurchaseStatus;
}

export interface BreadSalesRow {
  id: number;
  breadName: string;
  quantity: number;
  revenue: number;
  estimatedProfit: number;
}

export interface CustomerSalesRow {
  id: string;
  buyerName: string;
  orders: number;
  quantity: number;
  revenue: number;
}

export interface PurchaseRow extends Purchase {
  ingredient: Ingredient;
  totalCost: number;
}

export interface Supplier {
  id: number;
  name: string;
  document: string;
  phone: string;
  contactName: string;
}

export interface Customer {
  id: number;
  name: string;
  document: string;
  phone: string;
}
