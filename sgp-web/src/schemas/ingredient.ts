import z from 'zod';
import { ingredientCategorySchema } from './ingredient-category';
import { measuringUnitSchema } from './measuringUnit';

export const ingredientSchema = z.object({
    ingredientId: z.number().readonly().describe('Chave primária, apenas para leitura'),
    name: z.string({ error: 'Campo obrigatório' }).min(1, 'O nome do ingrediente é obrigatório.'),
    category: ingredientCategorySchema,
    measuringUnit: measuringUnitSchema,
    costPerUnit: z.number().nonnegative(),
    stockQuantity: z.number().int().nonnegative(),
    minStockQuantity: z.number().int().nonnegative()
})

export type Ingredient = z.infer<typeof ingredientSchema>