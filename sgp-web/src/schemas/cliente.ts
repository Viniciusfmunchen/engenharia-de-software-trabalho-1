import { mensagens } from '@/constantes/mensagens';
import z from 'zod';

const textoObrigatorio = z.string().trim().min(1, mensagens.validation.required);

export const clienteSchema = z.object({
  nome: textoObrigatorio,
  documento: textoObrigatorio,
  telefone: textoObrigatorio,
});

export type CriarCliente = z.infer<typeof clienteSchema>;
