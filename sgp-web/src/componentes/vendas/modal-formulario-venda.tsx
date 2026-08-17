import { CampoSelecaoFormulario, CampoTextoFormulario } from '@/componentes/formularios/campos';
import ModalFormulario from '@/componentes/formularios/modal-formulario';
import { opcoesFormaPagamento, type OpcaoFormulario } from '@/constantes/opcoes-formulario';
import { mensagens } from '@/constantes/mensagens';
import { nomeClienteBalcao } from '@/mocks/entidades-mock';
import {
  vendaSchema,
  type CriarVenda,
} from '@/schemas/venda';
import type { Cliente } from '@/tipos/cliente';
import type { Receita } from '@/tipos/receita';
import { obterDataHojeInput } from '@/utils/data';
import { resolverZod } from '@/utils/resolver';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesModalFormularioVenda {
  aberto?: boolean;
  open?: boolean;
  receitas: Receita[];
  clientes: Cliente[];
  aoFechar?: () => void;
  onClose?: () => void;
  aoSubmeter?: (valores: CriarVenda) => void;
  onSubmit?: (valores: CriarVenda) => void;
}

const obterValoresPadrao = (receitas: Receita[]): CriarVenda => ({
  data: obterDataHojeInput(),
  nomeComprador: nomeClienteBalcao,
  idReceita: receitas[0]?.idReceita ?? 0,
  quantidade: 1,
  formaPagamento: 'Pix',
});

const ModalFormularioVenda = ({
  aberto,
  open,
  receitas,
  clientes,
  aoFechar,
  onClose,
  aoSubmeter,
  onSubmit,
}: PropriedadesModalFormularioVenda) => {
  const estaAberto = aberto ?? open ?? false;
  const fechar = aoFechar ?? onClose ?? (() => {});
  const submeter = aoSubmeter ?? onSubmit ?? (() => {});

  const valoresPadrao = obterValoresPadrao(receitas);
  const opcoesReceitas: OpcaoFormulario<number>[] = receitas.map((receita) => ({
    value: receita.idReceita,
    label: receita.nomeReceita,
  }));
  const opcoesClientes: OpcaoFormulario<string>[] = clientes.map((cliente) => ({
    value: cliente.nome,
    label: cliente.nome,
  }));

  const formulario = useForm<CriarVenda>({
    resolver: resolverZod(vendaSchema),
    defaultValues: valoresPadrao,
  });

  const manipularFechamento = () => {
    formulario.reset(valoresPadrao);
    fechar();
  };

  const manipularSubmissao = (valores: CriarVenda) => {
    submeter(valores);
    manipularFechamento();
  };

  return (
    <ModalFormulario<CriarVenda>
      aberto={estaAberto}
      titulo={mensagens.forms.sale.title}
      formulario={formulario}
      aoFechar={manipularFechamento}
      onSubmit={manipularSubmissao}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<CriarVenda>
          name="data"
          label={mensagens.common.date}
          type="date"
          size="small"
          fullWidth
          autoFocus
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <CampoSelecaoFormulario<CriarVenda>
          name="formaPagamento"
          label={mensagens.forms.sale.paymentMethod}
          options={opcoesFormaPagamento}
          size="small"
          fullWidth
        />
      </Stack>

      <CampoSelecaoFormulario<CriarVenda>
        name="nomeComprador"
        label={mensagens.forms.sale.customer}
        options={opcoesClientes}
        size="small"
        fullWidth
      />

      <CampoSelecaoFormulario<CriarVenda>
        name="idReceita"
        label={mensagens.forms.sale.bread}
        options={opcoesReceitas}
        size="small"
        fullWidth
      />

      <CampoTextoFormulario<CriarVenda>
        name="quantidade"
        label={mensagens.common.quantity}
        type="number"
        size="small"
        fullWidth
        slotProps={{ htmlInput: { min: 1, step: 1 } }}
      />
    </ModalFormulario>
  );
};

export default ModalFormularioVenda;
