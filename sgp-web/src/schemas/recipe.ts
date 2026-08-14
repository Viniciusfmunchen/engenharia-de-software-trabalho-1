import z from 'zod';
import { adicionarIngredienteReceitaSchema, ingredienteReceitaSchema } from './ingredient';

export const receitaSchema = z.object({
    idReceita: z.coerce.number().readonly().describe('Chave primaria, apenas para leitura'),
    nomeReceita: z.string({ error: 'Campo obrigatório' }).min(1, 'O nome da receita é obrigatório.'),
    precoVenda: z.coerce.number({ error: 'Campo obrigatório' }).positive('O preço de venda deve ser um número positivo.'),
    rendimento: z.coerce.number({ error: 'Campo obrigatório' }).positive('A renda deve ser um número positivo.').int('A renda deve ser um número inteiro.'),
    tempoPreparacao: z.coerce.number({ error: 'Campo obrigatório' }).positive('O tempo de preparo deve ser um número positivo.').int('O tempo de preparo deve ser um número inteiro.'),
    ingredientes: z.array(ingredienteReceitaSchema),
    precoPorUnidade: z.number().readonly(),
    precoPorReceita: z.number().readonly(),
});

export type Receita = z.infer<typeof receitaSchema>

export const criarReceitaSchema = receitaSchema.omit({
    idReceita: true,
    precoPorUnidade: true,
    precoPorReceita: true,
    ingredientes: true
}).extend({
    ingredientes: z.array(adicionarIngredienteReceitaSchema)
});

export type CriarReceita = z.infer<typeof criarReceitaSchema>

export type AtualizarReceita = z.infer<typeof receitaSchema>

export const simularProducaoSchema = z.object({
    idReceita: z.number(),
    lotes: z.number().int().min(1, 'O número de lotes a simular deve ser maior que 0.')
})

export type SimularProducao = z.infer<typeof simularProducaoSchema>
