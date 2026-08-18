import { mensagens } from '@/constantes/mensagens';
import z from 'zod';

const textoObrigatorio = z.string().trim().min(1, mensagens.validacao.obrigatorio);

export const clienteSchema = z.object({
  nome: textoObrigatorio,
  documento: textoObrigatorio,
  telefone: textoObrigatorio,
});

export type CriarCliente = z.infer<typeof clienteSchema>;

export interface Cliente extends CriarCliente {
  idCliente: number;
}
