import { messages } from '@/constants/messages';
import {
  ingredientCategories,
  ingredientUnits,
  paymentMethods,
  purchaseStatuses,
  type IngredientCategory,
  type IngredientUnit,
  type PaymentMethod,
  type PurchaseStatus,
} from '@/types/bakery';

export interface FormOption<T extends string | number = string | number> {
  value: T;
  label: string;
}

export const ingredientCategoryOptions: FormOption<IngredientCategory>[] = ingredientCategories.map(
  (value) => ({
    value,
    label: messages.options.ingredientCategories[value],
  }),
);

export const ingredientUnitOptions: FormOption<IngredientUnit>[] = ingredientUnits.map((value) => ({
  value,
  label: value,
}));

export const paymentMethodOptions: FormOption<PaymentMethod>[] = paymentMethods.map((value) => ({
  value,
  label: messages.options.paymentMethods[value],
}));

export const purchaseStatusOptions: FormOption<PurchaseStatus>[] = purchaseStatuses.map((value) => ({
  value,
  label: messages.options.purchaseStatuses[value],
}));
