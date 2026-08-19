import z from 'zod';

export const categoriaIngredienteSchema = z.object({
  idCategoriaIngrediente: z.number().readonly().describe('Chave primária, apenas para leitura'),
  nomeCategoria: z.string({ error: 'Campo obrigatório' }).min(1, 'O nome da categoria é obrigatório'),
});

export type CategoriaIngrediente = z.infer<typeof categoriaIngredienteSchema>;

export const criarCategoriaIngredienteSchema = categoriaIngredienteSchema.omit({ idCategoriaIngrediente: true })

export type CriarCategoriaIngrediente = z.infer<typeof criarCategoriaIngredienteSchema>
