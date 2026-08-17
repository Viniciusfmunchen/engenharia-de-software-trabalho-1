import { CampoSelecaoFormulario, CampoTextoFormulario } from '@/componentes/formularios/campos';
import ModalFormulario from '@/componentes/formularios/modal-formulario';
import { opcoesStatusCompra, type OpcaoFormulario } from '@/constantes/opcoes-formulario';
import { mensagens } from '@/constantes/mensagens';
import {
  compraSchema,
  type FormularioCompraEntrada,
  type FormularioCompraValores,
} from '@/schemas/compra';
import type { Fornecedor } from '@/tipos/fornecedor';
import type { Ingrediente } from '@/tipos/ingrediente';
import { obterDataHojeInput } from '@/utils/data';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesModalFormularioCompra {
  aberto?: boolean;
  open?: boolean;
  ingredientes: Ingrediente[];
  fornecedores: Fornecedor[];
  aoFechar?: () => void;
  onClose?: () => void;
  aoSubmeter?: (valores: FormularioCompraValores) => void;
  onSubmit?: (valores: FormularioCompraValores) => void;
}

const obterValoresPadrao = (
  ingredientes: Ingrediente[],
  fornecedores: Fornecedor[],
): FormularioCompraEntrada => ({
  data: obterDataHojeInput(),
  nomeFornecedor: fornecedores[0]?.nome ?? '',
  idIngrediente: ingredientes[0]?.idIngrediente ?? 0,
  quantidade: 0,
  custoUnitario: ingredientes[0]?.precoPorUnidade ?? 0,
  status: 'Recebida',
});

const ModalFormularioCompra = ({
  aberto,
  open,
  ingredientes,
  fornecedores,
  aoFechar,
  onClose,
  aoSubmeter,
  onSubmit,
}: PropriedadesModalFormularioCompra) => {
  const estaAberto = aberto ?? open ?? false;
  const fechar = aoFechar ?? onClose ?? (() => {});
  const submeter = aoSubmeter ?? onSubmit ?? (() => {});

  const valoresPadrao = obterValoresPadrao(ingredientes, fornecedores);
  const opcoesIngredientes: OpcaoFormulario<number>[] = ingredientes.map((ingrediente) => ({
    value: ingrediente.idIngrediente,
    label: ingrediente.nomeIngrediente,
  }));
  const opcoesFornecedores: OpcaoFormulario<string>[] = fornecedores.map((fornecedor) => ({
    value: fornecedor.nome,
    label: fornecedor.nome,
  }));

  const formulario = useForm<FormularioCompraEntrada, unknown, FormularioCompraValores>({
    resolver: zodResolver(compraSchema),
    defaultValues: valoresPadrao,
  });

  const manipularFechamento = () => {
    formulario.reset(valoresPadrao);
    fechar();
  };

  const manipularSubmissao = (valores: FormularioCompraValores) => {
    submeter(valores);
    manipularFechamento();
  };

  return (
    <ModalFormulario
      aberto={estaAberto}
      titulo={mensagens.forms.purchase.title}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<FormularioCompraEntrada>
          name="data"
          label={mensagens.common.date}
          type="date"
          size="small"
          fullWidth
          autoFocus
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <CampoSelecaoFormulario<FormularioCompraEntrada>
          name="status"
          label={mensagens.common.status}
          options={opcoesStatusCompra}
          size="small"
          fullWidth
        />
      </Stack>

      <CampoSelecaoFormulario<FormularioCompraEntrada>
        name="nomeFornecedor"
        label={mensagens.forms.purchase.supplierName}
        options={opcoesFornecedores}
        size="small"
        fullWidth
      />

      <CampoSelecaoFormulario<FormularioCompraEntrada>
        name="idIngrediente"
        label={mensagens.forms.purchase.ingredient}
        options={opcoesIngredientes}
        size="small"
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<FormularioCompraEntrada>
          name="quantidade"
          label={mensagens.common.quantity}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
        <CampoTextoFormulario<FormularioCompraEntrada>
          name="custoUnitario"
          label={mensagens.forms.purchase.unitCost}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.0001' } }}
        />
      </Stack>
    </ModalFormulario>
  );
};

export default ModalFormularioCompra;
