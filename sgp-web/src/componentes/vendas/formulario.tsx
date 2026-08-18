import { CampoSelecaoFormulario, CampoTextoFormulario } from '@/componentes/ui/formularios/campos';
import ModalFormulario from '@/componentes/ui/formularios/modal';
import type { OpcaoFormulario } from '@/componentes/ui/formularios/campos';
import { mensagens } from '@/constantes/mensagens';
import {
  vendaSchema,
  type CriarVenda,
} from '@/schemas/venda';
import type { Cliente } from '@/schemas/cliente';
import type { Receita } from '@/schemas/receita';
import { formasPagamento } from '@/schemas/venda';
import { resolverZod } from '@/utils/resolver';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesFormularioVenda {
  aberto?: boolean;
  open?: boolean;
  receitas: Receita[];
  clientes: Cliente[];
  aoFechar?: () => void;
  onClose?: () => void;
  aoSubmeter?: (valores: CriarVenda) => void;
  onSubmit?: (valores: CriarVenda) => void;
}

const obterDataHojeInput = () => new Date().toISOString().split('T')[0];

const obterValoresPadrao = (receitas: Receita[]): CriarVenda => ({
  data: obterDataHojeInput(),
  nomeComprador: 'Cliente Balcão',
  idReceita: receitas[0]?.idReceita ?? 0,
  quantidade: 1,
  formaPagamento: 'Pix',
});

const FormularioVenda = ({
  aberto,
  open,
  receitas,
  clientes,
  aoFechar,
  onClose,
  aoSubmeter,
  onSubmit,
}: PropriedadesFormularioVenda) => {
  const estaAberto = aberto ?? open ?? false;
  const fechar = aoFechar ?? onClose ?? (() => { });
  const submeter = aoSubmeter ?? onSubmit ?? (() => { });

  const valoresPadrao = obterValoresPadrao(receitas);
  const opcoesReceitas: OpcaoFormulario[] = receitas.map((receita) => ({
    value: receita.idReceita,
    label: receita.nomeReceita,
  }));
  const opcoesClientes: OpcaoFormulario[] = clientes.map((cliente) => ({
    value: cliente.nome,
    label: cliente.nome,
  }));
  const opcoesFormaPagamento: OpcaoFormulario[] = formasPagamento.map((forma) => ({
    value: forma,
    label: forma,
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
      titulo={mensagens.formularios.venda.titulo}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<CriarVenda>
          name="data"
          label={mensagens.comum.data}
          type="date"
          size="small"
          fullWidth
          autoFocus
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <CampoSelecaoFormulario<CriarVenda>
          name="formaPagamento"
          label={mensagens.formularios.venda.formaPagamento}
          options={opcoesFormaPagamento}
          size="small"
          fullWidth
        />
      </Stack>

      <CampoSelecaoFormulario<CriarVenda>
        name="nomeComprador"
        label={mensagens.formularios.venda.cliente}
        options={opcoesClientes}
        size="small"
        fullWidth
      />

      <CampoSelecaoFormulario<CriarVenda>
        name="idReceita"
        label={mensagens.formularios.venda.pao}
        options={opcoesReceitas}
        size="small"
        fullWidth
      />

      <CampoTextoFormulario<CriarVenda>
        name="quantidade"
        label={mensagens.comum.quantidade}
        type="number"
        size="small"
        fullWidth
        slotProps={{ htmlInput: { min: 1, step: 1 } }}
      />
    </ModalFormulario>
  );
};

export default FormularioVenda;
