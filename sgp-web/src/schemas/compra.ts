import { mensagens } from '@/constantes/mensagens';
import { statusCompra } from '@/tipos/padaria';
import z from 'zod';

const textoObrigatorio = z.string().trim().min(1, mensagens.validation.required);

const valorNumerico = (schema: z.ZodType<number>) =>
  z.preprocess((val) => (val === '' ? undefined : Number(val)), schema);

const numeroPositivo = valorNumerico(
  z.number({ error: mensagens.validation.positive }).positive(mensagens.validation.positive),
);

const inteiroPositivo = valorNumerico(
  z
    .number({ error: mensagens.validation.positiveInteger })
    .int(mensagens.validation.positiveInteger)
    .positive(mensagens.validation.positiveInteger),
);

export const compraSchema = z.object({
  data: textoObrigatorio,
  nomeFornecedor: textoObrigatorio,
  idIngrediente: inteiroPositivo,
  quantidade: numeroPositivo,
  custoUnitario: numeroPositivo,
  status: z.enum(statusCompra),
});

export type CriarCompra = z.infer<typeof compraSchema>;
