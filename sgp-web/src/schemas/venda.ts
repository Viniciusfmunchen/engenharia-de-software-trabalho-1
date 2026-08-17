import { mensagens } from '@/constantes/mensagens';
import { formasPagamento } from '@/tipos/padaria';
import z from 'zod';

const textoObrigatorio = z.string().trim().min(1, mensagens.validation.required);

const valorNumerico = (schema: z.ZodType<number>) =>
  z.preprocess((val) => (val === '' ? undefined : Number(val)), schema);

const inteiroPositivo = valorNumerico(
  z
    .number({ error: mensagens.validation.positiveInteger })
    .int(mensagens.validation.positiveInteger)
    .positive(mensagens.validation.positiveInteger),
);

export const vendaSchema = z.object({
  data: textoObrigatorio,
  nomeComprador: textoObrigatorio,
  idReceita: inteiroPositivo,
  quantidade: inteiroPositivo,
  formaPagamento: z.enum(formasPagamento),
});

export type FormularioVendaEntrada = z.input<typeof vendaSchema>;
export type FormularioVendaValores = z.output<typeof vendaSchema>;
