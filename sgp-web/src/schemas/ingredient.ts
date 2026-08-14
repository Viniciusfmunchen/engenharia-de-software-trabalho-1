import z from 'zod';
import { categoriaIngredienteSchema } from './ingredient-category';
import { unidadeMedidaIngredienteSchema } from './measuringUnit';

export const ingredienteSchema = z.object({
    idIngrediente: z.number().readonly().describe('Chave primária, apenas para leitura'),
    nomeIngrediente: z.string({ error: 'Campo obrigatório' }).min(1, 'O nome do ingrediente é obrigatório.'),
    categoriaIngrediente: categoriaIngredienteSchema,
    unidadeIngrediente: unidadeMedidaIngredienteSchema,
    precoPorUnidade: z.number().nonnegative(),
    estoqueAtual: z.number().int().nonnegative(),
    estoqueMinimo: z.number().int().nonnegative()
})

export type Ingrediente = z.infer<typeof ingredienteSchema>

export const ingredienteReceitaSchema = ingredienteSchema.extend({
    quantidade: z.number()
})

export type IngredienteReceita = z.infer<typeof ingredienteReceitaSchema>

export const adicionarIngredienteReceitaSchema = z.object({
    idIngrediente: z.coerce.number(),
    quantidade: z.coerce.number(),
})

export type AdicionarIngredienteReceita = z.infer<typeof adicionarIngredienteReceitaSchema>