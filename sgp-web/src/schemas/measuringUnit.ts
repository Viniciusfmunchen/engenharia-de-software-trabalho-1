import z from "zod";

export const measuringUnitSchema = z.object({
    measuringUnitId: z.number().readonly().describe('Chave primaria, apenas para leitura'),
    name: z.string({ error: 'Campo obrigatório' }).min(1, 'O nome da unidade de medida é obrigatório.'),
    symbol: z.string({ error: 'Campo obrigatório' }).min(1, 'O simbolo da unidade de medida é obrigatório.')
})

export type MeasuringUnit = z.infer<typeof measuringUnitSchema>