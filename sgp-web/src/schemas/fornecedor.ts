import { mensagens } from '@/constantes/mensagens';
import z from 'zod';

const textoObrigatorio = z.string().trim().min(1, mensagens.validacao.obrigatorio);

export const fornecedorSchema = z.object({
  nome: textoObrigatorio,
  documento: textoObrigatorio,
  telefone: textoObrigatorio,
  nomeContato: textoObrigatorio,
});

export type CriarFornecedor = z.infer<typeof fornecedorSchema>;

export interface Fornecedor extends CriarFornecedor {
  idFornecedor: number;
}
