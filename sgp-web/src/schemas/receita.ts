import { mensagens } from '@/constantes/mensagens';
import { z } from 'zod';
import { adicionarIngredienteReceitaSchema, ingredienteReceitaSchema } from './ingrediente';
import { unidadeMedidaIngredienteSchema } from './unidade-medida';

export const receitaSchema = z.object({
  idReceita: z.coerce.number().readonly().describe('Chave primária, apenas para leitura'),
  nomeReceita: z.string({ error: mensagens.validacao.obrigatorio }).min(1, 'O nome da receita é obrigatório.'),
  rendimento: z.coerce
    .number({ error: mensagens.validacao.obrigatorio })
    .positive('O rendimento deve ser um número positivo.')
    .int('O rendimento deve ser um número inteiro.'),
  tempoPreparo: z.coerce
    .number({ error: mensagens.validacao.obrigatorio })
    .positive('O tempo de preparo deve ser um número positivo.')
    .int('O tempo de preparo deve ser um número inteiro.'),
  ingredientes: z.array(ingredienteReceitaSchema),
  validade: z.coerce.number(),
  unidadeMedida: unidadeMedidaIngredienteSchema
});

export type Receita = z.infer<typeof receitaSchema>;

export const criarReceitaSchema = receitaSchema
  .omit({
    idReceita: true,
    ingredientes: true,
  })
  .extend({
    ingredientes: z.array(adicionarIngredienteReceitaSchema).min(1, mensagens.validacao.minimoUmIngrediente),
    idUnidadeMedida: z.coerce.number(),
  });

export type CriarReceita = z.infer<typeof criarReceitaSchema>;

export type AtualizarReceita = Receita;

export const simularProducaoSchema = z.object({
  idReceita: z.coerce.number(),
  lotes: z.coerce.number().int().min(1, 'O número de lotes a simular deve ser maior que 0.'),
});

export type SimularProducao = z.infer<typeof simularProducaoSchema>;

export const producaoSimuladaSchema = z.object({
  nomeReceita: z.string(),
  lotes: z.coerce.number().positive().int(),
  custoEstimado: z.coerce.number().positive(),
  maximoLotesPossivel: z.coerce.number().positive().int(),
  ingredientesSuficientes: z.boolean(),
  ingredientes: z.object({
    nomeIngrediente: z.string(),
    quantidadeNecessaria: z.coerce.number(),
    estoqueAtual: z.coerce.number(),
    saldoAposProducao: z.coerce.number(),
    suficiente: z.boolean(),
  }).array()
})

export type ProducaoSimulada = z.infer<typeof producaoSimuladaSchema>
