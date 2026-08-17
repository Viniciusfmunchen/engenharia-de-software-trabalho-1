import { mensagens } from '@/constantes/mensagens';
import z from 'zod';
import { adicionarIngredienteReceitaSchema, ingredienteReceitaSchema } from './ingrediente';

export const receitaSchema = z.object({
  idReceita: z.coerce.number().readonly().describe('Chave primária, apenas para leitura'),
  nomeReceita: z.string({ error: mensagens.validation.required }).min(1, 'O nome da receita é obrigatório.'),
  precoVenda: z.coerce
    .number({ error: mensagens.validation.required })
    .positive('O preço de venda deve ser um número positivo.'),
  rendimento: z.coerce
    .number({ error: mensagens.validation.required })
    .positive('O rendimento deve ser um número positivo.')
    .int('O rendimento deve ser um número inteiro.'),
  tempoPreparacao: z.coerce
    .number({ error: mensagens.validation.required })
    .positive('O tempo de preparo deve ser um número positivo.')
    .int('O tempo de preparo deve ser um número inteiro.'),
  ingredientes: z.array(ingredienteReceitaSchema),
  precoPorUnidade: z.number().readonly().optional(),
  precoPorReceita: z.number().readonly().optional(),
});

export type Receita = z.infer<typeof receitaSchema>;

export const criarReceitaSchema = receitaSchema
  .omit({
    idReceita: true,
    precoPorUnidade: true,
    precoPorReceita: true,
    ingredientes: true,
  })
  .extend({
    ingredientes: z.array(adicionarIngredienteReceitaSchema).min(1, mensagens.validation.minOneIngredient),
  });

export type CriarReceita = z.infer<typeof criarReceitaSchema>;

export type AtualizarReceita = z.infer<typeof receitaSchema>;

export const simularProducaoSchema = z.object({
  idReceita: z.number(),
  lotes: z.number().int().min(1, 'O número de lotes a simular deve ser maior que 0.'),
});

export type SimularProducao = z.infer<typeof simularProducaoSchema>;
