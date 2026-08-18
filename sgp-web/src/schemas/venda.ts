import { mensagens } from '@/constantes/mensagens';
export const formasPagamento = ['Pix', 'Cartão', 'Dinheiro'] as const;
export type FormaPagamento = typeof formasPagamento[number];
import z from 'zod';

const textoObrigatorio = z.string().trim().min(1, mensagens.validacao.obrigatorio);

const valorNumerico = (schema: z.ZodType<number>) =>
  z.preprocess((val) => (val === '' ? undefined : Number(val)), schema);

const inteiroPositivo = valorNumerico(
  z
    .number({ error: mensagens.validacao.inteiroPositivo })
    .int(mensagens.validacao.inteiroPositivo)
    .positive(mensagens.validacao.inteiroPositivo),
);

export const vendaSchema = z.object({
  data: textoObrigatorio,
  nomeComprador: textoObrigatorio,
  idReceita: inteiroPositivo,
  quantidade: inteiroPositivo,
  formaPagamento: z.enum(formasPagamento),
});

export type CriarVenda = z.infer<typeof vendaSchema>;

export interface Venda extends CriarVenda {
  idVenda: number;
}

export interface LinhaVendasPao {
  idReceita: number;
  nomePao: string;
  quantidade: number;
  faturamento: number;
  lucroEstimado: number;
}

export interface LinhaVendasCliente {
  idComprador: string;
  nomeComprador: string;
  pedidos: number;
  quantidade: number;
  faturamento: number;
}

export interface LinhaPagamento {
  formaPagamento: FormaPagamento;
  pedidos: number;
  faturamento: number;
}
