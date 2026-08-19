import { CampoTextoFormulario } from '@/componentes/ui/formularios/campos';
import ModalFormulario from '@/componentes/ui/formularios/modal';
import { mensagens } from '@/constantes/mensagens';
import {
  clienteSchema,
  type CriarCliente,
} from '@/schemas/cliente';
import { resolverZod } from '@/utils/resolver';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesFormularioCliente {
  aberto?: boolean;
  open?: boolean;
  aoFechar?: () => void;
  onClose?: () => void;
  aoSubmeter?: (valores: CriarCliente) => void;
  onSubmit?: (valores: CriarCliente) => void;
}

const valoresPadrao: CriarCliente = {
  nome: '',
  documento: '',
  telefone: '',
};

const FormularioCliente = ({
  aberto,
  open,
  aoFechar,
  onClose,
  aoSubmeter,
  onSubmit,
}: PropriedadesFormularioCliente) => {
  const estaAberto = aberto ?? open ?? false;
  const fechar = aoFechar ?? onClose ?? (() => { });
  const submeter = aoSubmeter ?? onSubmit ?? (() => { });

  const formulario = useForm<CriarCliente>({
    resolver: resolverZod(clienteSchema),
    defaultValues: valoresPadrao,
  });

  const manipularFechamento = () => {
    formulario.reset(valoresPadrao);
    fechar();
  };

  const manipularSubmissao = (valores: CriarCliente) => {
    submeter(valores);
    manipularFechamento();
  };

  return (
    <ModalFormulario
      aberto={estaAberto}
      titulo={mensagens.formularios.cliente.titulo}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
    >
      <CampoTextoFormulario<CriarCliente>
        name="nome"
        label={mensagens.formularios.cliente.nome}
        size="small"
        fullWidth
        autoFocus
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<CriarCliente>
          name="documento"
          label={mensagens.formularios.cliente.documento}
          size="small"
          fullWidth
        />
        <CampoTextoFormulario<CriarCliente>
          name="telefone"
          label={mensagens.formularios.cliente.telefone}
          size="small"
          fullWidth
        />
      </Stack>
    </ModalFormulario>
  );
};

export default FormularioCliente;
