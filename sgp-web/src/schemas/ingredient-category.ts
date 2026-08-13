import z from "zod";

export const ingredientCategorySchema = z.object({
    ingredientCategoryId: z.number().readonly().describe('Chave primaria, apenas para leitura'),
    name: z.string({ error: 'Campo obrigatório' }).min(1, 'O nome da categoria é obrigatório')
})

export type IngredientCategory = z.infer<typeof ingredientCategorySchema>;