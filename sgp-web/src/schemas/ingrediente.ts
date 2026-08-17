import { mensagens } from '@/constantes/mensagens';
import { categoriasIngrediente, unidadesIngrediente } from '@/tipos/padaria';
import z from 'zod';
import { categoriaIngredienteSchema } from './categoria-ingrediente';
import { unidadeMedidaIngredienteSchema } from './unidade-medida';

export const ingredienteSchema = z.object({
  idIngrediente: z.number().readonly().describe('Chave primária, apenas para leitura'),
  nomeIngrediente: z
    .string({ error: mensagens.validation.required })
    .min(1, 'O nome do ingrediente é obrigatório.'),
  categoriaIngrediente: categoriaIngredienteSchema,
  unidadeIngrediente: unidadeMedidaIngredienteSchema,
  precoPorUnidade: z.number().nonnegative(),
  estoqueAtual: z.number().int().nonnegative(),
  estoqueMinimo: z.number().int().nonnegative(),
});

export type Ingrediente = z.infer<typeof ingredienteSchema>;

export const ingredienteReceitaSchema = ingredienteSchema.extend({
  quantidade: z.number(),
});

export type IngredienteReceita = z.infer<typeof ingredienteReceitaSchema>;

export const adicionarIngredienteReceitaSchema = z.object({
  idIngrediente: z.coerce.number(),
  quantidade: z.coerce.number(),
});

export type AdicionarIngredienteReceita = z.infer<typeof adicionarIngredienteReceitaSchema>;

export const criarIngredienteSchema = z.object({
  nomeIngrediente: z.string(),
  idCategoriaIngrediente: z.coerce.number(),
  idUnidadeIngrediente: z.coerce.number(),
  precoPorUnidade: z.coerce.number(),
  estoqueAtual: z.coerce.number(),
  estoqueMinimo: z.coerce.number()
})

export type CriarIngrediente = z.infer<typeof criarIngredienteSchema>
