import { CampoTextoFormulario } from '@/componentes/ui/formularios/campos';
import ModalFormulario from '@/componentes/ui/formularios/modal';
import { mensagens } from '@/constantes/mensagens';
import {
  fornecedorSchema,
  type CriarFornecedor,
} from '@/schemas/fornecedor';
import { resolverZod } from '@/utils/resolver';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesFormularioFornecedor {
  aberto?: boolean;
  open?: boolean;
  aoFechar?: () => void;
  onClose?: () => void;
  aoSubmeter?: (valores: CriarFornecedor) => void;
  onSubmit?: (valores: CriarFornecedor) => void;
}

const valoresPadrao: CriarFornecedor = {
  nome: '',
  documento: '',
  telefone: '',
  nomeContato: '',
};

const FormularioFornecedor = ({
  aberto,
  open,
  aoFechar,
  onClose,
  aoSubmeter,
  onSubmit,
}: PropriedadesFormularioFornecedor) => {
  const estaAberto = aberto ?? open ?? false;
  const fechar = aoFechar ?? onClose ?? (() => { });
  const submeter = aoSubmeter ?? onSubmit ?? (() => { });

  const formulario = useForm<CriarFornecedor>({
    resolver: resolverZod(fornecedorSchema),
    defaultValues: valoresPadrao,
  });

  const manipularFechamento = () => {
    formulario.reset(valoresPadrao);
    fechar();
  };

  const manipularSubmissao = (valores: CriarFornecedor) => {
    submeter(valores);
    manipularFechamento();
  };

  return (
    <ModalFormulario
      aberto={estaAberto}
      titulo={mensagens.formularios.fornecedor.titulo}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
    >
      <CampoTextoFormulario<CriarFornecedor>
        name="nome"
        label={mensagens.formularios.fornecedor.nome}
        size="small"
        fullWidth
        autoFocus
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<CriarFornecedor>
          name="documento"
          label={mensagens.formularios.fornecedor.documento}
          size="small"
          fullWidth
        />
        <CampoTextoFormulario<CriarFornecedor>
          name="telefone"
          label={mensagens.formularios.fornecedor.telefone}
          size="small"
          fullWidth
        />
      </Stack>

      <CampoTextoFormulario<CriarFornecedor>
        name="nomeContato"
        label={mensagens.formularios.fornecedor.nomeContato}
        size="small"
        fullWidth
      />
    </ModalFormulario>
  );
};

export default FormularioFornecedor;
