import { messages } from '@/constants/messages';
import {
  ingredientCategories,
  ingredientUnits,
  paymentMethods,
  purchaseStatuses,
} from '@/types/bakery';
import { z } from 'zod';

const requiredString = z.string().trim().min(1, messages.validation.required);

const numericValue = (schema: z.ZodType<number>) =>
  z.preprocess(
    (value) => (value === '' ? undefined : Number(value)),
    schema,
  );

const positiveNumber = numericValue(
  z.number({ error: messages.validation.positive }).positive(messages.validation.positive),
);

const positiveInteger = numericValue(
  z
    .number({ error: messages.validation.positiveInteger })
    .int(messages.validation.positiveInteger)
    .positive(messages.validation.positiveInteger),
);

export const ingredientSchema = z.object({
  name: requiredString,
  category: z.enum(ingredientCategories),
  unit: z.enum(ingredientUnits),
  costPerUnit: positiveNumber,
  stockQuantity: positiveNumber,
  minStockQuantity: positiveNumber,
});

export const purchaseSchema = z.object({
  date: requiredString,
  supplierName: requiredString,
  ingredientId: positiveInteger,
  quantity: positiveNumber,
  unitCost: positiveNumber,
  status: z.enum(purchaseStatuses),
});

export const saleSchema = z.object({
  date: requiredString,
  buyerName: requiredString,
  recipeId: positiveInteger,
  quantity: positiveInteger,
  paymentMethod: z.enum(paymentMethods),
});

export const recipeIngredientSchema = z.object({
  ingredientId: positiveInteger,
  quantity: positiveNumber,
});

export const breadRecipeSchema = z.object({
  name: requiredString,
  salePrice: positiveNumber,
  yieldUnits: positiveInteger,
  preparationTimeMinutes: positiveInteger,
  ingredients: z.array(recipeIngredientSchema).min(1, messages.validation.minOneIngredient),
});

export const supplierSchema = z.object({
  name: requiredString,
  document: requiredString,
  phone: requiredString,
  contactName: requiredString,
});

export const customerSchema = z.object({
  name: requiredString,
  document: requiredString,
  phone: requiredString,
});

export type IngredientFormInput = z.input<typeof ingredientSchema>;
export type IngredientFormValues = z.output<typeof ingredientSchema>;
export type PurchaseFormInput = z.input<typeof purchaseSchema>;
export type PurchaseFormValues = z.output<typeof purchaseSchema>;
export type SaleFormInput = z.input<typeof saleSchema>;
export type SaleFormValues = z.output<typeof saleSchema>;
export type BreadRecipeFormInput = z.input<typeof breadRecipeSchema>;
export type BreadRecipeFormValues = z.output<typeof breadRecipeSchema>;
export type SupplierFormValues = z.output<typeof supplierSchema>;
export type CustomerFormValues = z.output<typeof customerSchema>;
