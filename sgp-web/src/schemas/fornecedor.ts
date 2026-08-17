import { mensagens } from '@/constantes/mensagens';
import z from 'zod';

const textoObrigatorio = z.string().trim().min(1, mensagens.validation.required);

export const fornecedorSchema = z.object({
  nome: textoObrigatorio,
  documento: textoObrigatorio,
  telefone: textoObrigatorio,
  nomeContato: textoObrigatorio,
});

export type FormularioFornecedorEntrada = z.input<typeof fornecedorSchema>;
export type FormularioFornecedorValores = z.output<typeof fornecedorSchema>;
