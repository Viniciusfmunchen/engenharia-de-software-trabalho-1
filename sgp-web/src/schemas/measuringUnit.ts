import z from "zod";

export const unidadeMedidaIngredienteSchema = z.object({
    idUnidadeIngrediente: z.number().readonly().describe('Chave primaria, apenas para leitura'),
    nomeUnidade: z.string({ error: 'Campo obrigatório' }).min(1, 'O nome da unidade de medida é obrigatório.'),
    abreviacaoUnidade: z.string({ error: 'Campo obrigatório' }).min(1, 'O simbolo da unidade de medida é obrigatório.')
})

export type UnidadeMedida = z.infer<typeof unidadeMedidaIngredienteSchema>