import z from 'zod';
import { ingredientSchema } from './ingredient';

export const recipeSchema = z.object({
    recipeId: z.number().readonly().describe('Chave primaria, apenas para leitura'),
    name: z.string({ error: 'Campo obrigatório' }).min(1, 'O nome da receita é obrigatório.'),
    salePrice: z.number({ error: 'Campo obrigatório' }).positive('O preço de venda deve ser um número positivo.'),
    yieldUnits: z.number({ error: 'Campo obrigatório' }).positive('A renda deve ser um número positivo.').int('A renda deve ser um número inteiro.'),
    preparationTime: z.number({ error: 'Campo obrigatório' }).positive('O tempo de preparo deve ser um número positivo.').int('O tempo de preparo deve ser um número inteiro.'),
    ingredients: z.array(ingredientSchema),
});

export type Recipe = z.infer<typeof recipeSchema>