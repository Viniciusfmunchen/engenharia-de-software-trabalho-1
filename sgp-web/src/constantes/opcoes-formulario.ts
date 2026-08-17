import { mensagens } from '@/constantes/mensagens';
import {
  categoriasIngrediente,
  formasPagamento,
  statusCompra,
  unidadesIngrediente,
  type CategoriaIngredienteValor,
  type FormaPagamento,
  type StatusCompra,
  type UnidadeIngredienteValor,
} from '@/tipos/padaria';

export interface OpcaoFormulario<T extends string | number = string | number> {
  value: T;
  label: string;
}

export const opcoesCategoriaIngrediente: OpcaoFormulario<CategoriaIngredienteValor>[] =
  categoriasIngrediente.map((value) => ({
    value,
    label: mensagens.options.ingredientCategories[value],
  }));

export const opcoesUnidadeIngrediente: OpcaoFormulario<UnidadeIngredienteValor>[] =
  unidadesIngrediente.map((value) => ({
    value,
    label: value,
  }));

export const opcoesFormaPagamento: OpcaoFormulario<FormaPagamento>[] = formasPagamento.map(
  (value) => ({
    value,
    label: mensagens.options.paymentMethods[value],
  }),
);

export const opcoesStatusCompra: OpcaoFormulario<StatusCompra>[] = statusCompra.map((value) => ({
  value,
  label: mensagens.options.purchaseStatuses[value],
}));
