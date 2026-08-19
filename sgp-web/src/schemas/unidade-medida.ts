import z from 'zod';

export const unidadeMedidaIngredienteSchema = z.object({
  idUnidadeMedida: z.number().readonly().describe('Chave primária, apenas para leitura'),
  nomeUnidadeMedida: z.string({ error: 'Campo obrigatório' }).min(1, 'O nome da unidade de medida é obrigatório.'),
  abreviacao: z.string({ error: 'Campo obrigatório' }).min(1, 'O símbolo da unidade de medida é obrigatório.'),
});

export type UnidadeMedida = z.infer<typeof unidadeMedidaIngredienteSchema>;

export const criarUnidadeMedidaSchema = unidadeMedidaIngredienteSchema.omit({
  idUnidadeMedida: true
})

export type CriarUnidadeMedida = z.infer<typeof criarUnidadeMedidaSchema>;