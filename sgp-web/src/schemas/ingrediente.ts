import { mensagens } from '@/constantes/mensagens';

import z from 'zod';
import { categoriaIngredienteSchema } from './categoria-ingrediente';
import { unidadeMedidaIngredienteSchema } from './unidade-medida';

export const ingredienteSchema = z.object({
  idIngrediente: z.number().readonly().describe('Chave primária, apenas para leitura'),
  nomeIngrediente: z
    .string({ error: mensagens.validacao.obrigatorio })
    .min(1, 'O nome do ingrediente é obrigatório.'),
  categoriaIngrediente: categoriaIngredienteSchema,
  unidadeMedida: unidadeMedidaIngredienteSchema,
  custoPorUnidade: z.number().nonnegative(),
  estoqueAtual: z.number().int().nonnegative(),
  estoqueMinimo: z.number().int().nonnegative(),
});

export type Ingrediente = z.infer<typeof ingredienteSchema>;

export const ingredienteReceitaSchema = ingredienteSchema.extend({
  quantidade: z.number(),
});

export type IngredienteReceita = z.infer<typeof ingredienteReceitaSchema>;

export const adicionarIngredienteReceitaSchema = z.object({
  idIngrediente: z.coerce.number().min(1, 'Selecione um ingrediente'),
  quantidade: z.coerce.number().positive('A quantidade deve ser maior que zero'),
});

export type AdicionarIngredienteReceita = z.infer<typeof adicionarIngredienteReceitaSchema>;

export const criarIngredienteSchema = z.object({
  nomeIngrediente: z.string().min(1, 'O nome é obrigatório'),
  idCategoriaIngrediente: z.coerce.number().min(1, 'Selecione uma categoria'),
  idUnidadeMedida: z.coerce.number().min(1, 'Selecione uma unidade de medida'),
  custoPorUnidade: z.coerce.number().min(0, 'Não pode ser negativo'),
  estoqueAtual: z.coerce.number().min(0, 'Não pode ser negativo'),
  estoqueMinimo: z.coerce.number().min(0, 'Não pode ser negativo')
})

export type CriarIngrediente = z.infer<typeof criarIngredienteSchema>
