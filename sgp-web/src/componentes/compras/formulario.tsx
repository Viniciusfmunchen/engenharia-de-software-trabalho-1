import { CampoSelecaoFormulario, CampoTextoFormulario } from '@/componentes/ui/formularios/campos';
import ModalFormulario from '@/componentes/ui/formularios/modal';
import { opcoesStatusCompra, type OpcaoFormulario } from '@/constantes/opcoes-formulario';
import { mensagens } from '@/constantes/mensagens';
import {
  compraSchema,
  type CriarCompra,
} from '@/schemas/compra';
import type { Fornecedor } from '@/schemas/fornecedor';
import type { Ingrediente } from '@/schemas/ingrediente';
import { resolverZod } from '@/utils/resolver';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesFormularioCompra {
  aberto?: boolean;
  open?: boolean;
  ingredientes: Ingrediente[];
  fornecedores: Fornecedor[];
  aoFechar?: () => void;
  onClose?: () => void;
  aoSubmeter?: (valores: CriarCompra) => void;
  onSubmit?: (valores: CriarCompra) => void;
}

const obterValoresPadrao = (
  ingredientes: Ingrediente[],
  fornecedores: Fornecedor[],
): CriarCompra => ({
  data: new Date().toISOString().split('T')[0],
  nomeFornecedor: fornecedores[0]?.nome ?? '',
  idIngrediente: ingredientes[0]?.idIngrediente ?? 0,
  quantidade: 0,
  custoUnitario: ingredientes[0]?.precoPorUnidade ?? 0,
  status: 'Concluída',
});

const FormularioCompra = ({
  aberto,
  open,
  ingredientes,
  fornecedores,
  aoFechar,
  onClose,
  aoSubmeter,
  onSubmit,
}: PropriedadesFormularioCompra) => {
  const estaAberto = aberto ?? open ?? false;
  const fechar = aoFechar ?? onClose ?? (() => { });
  const submeter = aoSubmeter ?? onSubmit ?? (() => { });

  const valoresPadrao = obterValoresPadrao(ingredientes, fornecedores);
  const opcoesIngredientes: OpcaoFormulario<number>[] = ingredientes.map((ingrediente) => ({
    value: ingrediente.idIngrediente,
    label: ingrediente.nomeIngrediente,
  }));
  const opcoesFornecedores: OpcaoFormulario<string>[] = fornecedores.map((fornecedor) => ({
    value: fornecedor.nome,
    label: fornecedor.nome,
  }));

  const formulario = useForm<CriarCompra>({
    resolver: resolverZod(compraSchema),
    defaultValues: valoresPadrao,
  });

  const manipularFechamento = () => {
    formulario.reset(valoresPadrao);
    fechar();
  };

  const manipularSubmissao = (valores: CriarCompra) => {
    submeter(valores);
    manipularFechamento();
  };

  return (
    <ModalFormulario
      aberto={estaAberto}
      titulo={mensagens.formularios.compra.titulo}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<CriarCompra>
          name="data"
          label={mensagens.comum.data}
          type="date"
          size="small"
          fullWidth
          autoFocus
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <CampoSelecaoFormulario<CriarCompra>
          name="status"
          label={mensagens.comum.status}
          options={opcoesStatusCompra}
          size="small"
          fullWidth
        />
      </Stack>

      <CampoSelecaoFormulario<CriarCompra>
        name="nomeFornecedor"
        label={mensagens.formularios.compra.fornecedor}
        options={opcoesFornecedores}
        size="small"
        fullWidth
      />

      <CampoSelecaoFormulario<CriarCompra>
        name="idIngrediente"
        label={mensagens.formularios.compra.ingrediente}
        options={opcoesIngredientes}
        size="small"
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<CriarCompra>
          name="quantidade"
          label={mensagens.comum.quantidade}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
        <CampoTextoFormulario<CriarCompra>
          name="custoUnitario"
          label={mensagens.formularios.compra.custoUnitario}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.0001' } }}
        />
      </Stack>
    </ModalFormulario>
  );
};

export default FormularioCompra;
