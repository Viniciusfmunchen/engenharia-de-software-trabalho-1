import { mensagens } from '@/constantes/mensagens';
export const statusCompra = ['Pendente', 'Concluída', 'Cancelada'] as const;
export type StatusCompra = typeof statusCompra[number];
import z from 'zod';

const textoObrigatorio = z.string().trim().min(1, mensagens.validacao.obrigatorio);

const valorNumerico = (schema: z.ZodType<number>) =>
  z.preprocess((val) => (val === '' ? undefined : Number(val)), schema);

const numeroPositivo = valorNumerico(
  z.number({ error: mensagens.validacao.positivo }).positive(mensagens.validacao.positivo),
);

const inteiroPositivo = valorNumerico(
  z
    .number({ error: mensagens.validacao.inteiroPositivo })
    .int(mensagens.validacao.inteiroPositivo)
    .positive(mensagens.validacao.inteiroPositivo),
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

export interface Compra extends CriarCompra {
  idCompra: number;
}

export interface LinhaCompra extends Compra {
  custoTotal: number;
  ingrediente: {
    nomeIngrediente: string;
    unidadeIngrediente: { abreviacaoUnidade: string };
  };
}
