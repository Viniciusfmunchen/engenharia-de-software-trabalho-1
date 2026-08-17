import { CampoTextoFormulario } from '@/componentes/formularios/campos';
import ModalFormulario from '@/componentes/formularios/modal-formulario';
import { mensagens } from '@/constantes/mensagens';
import {
  clienteSchema,
  type CriarCliente,
} from '@/schemas/cliente';
import { resolverZod } from '@/utils/resolver';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesModalFormularioCliente {
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

const ModalFormularioCliente = ({
  aberto,
  open,
  aoFechar,
  onClose,
  aoSubmeter,
  onSubmit,
}: PropriedadesModalFormularioCliente) => {
  const estaAberto = aberto ?? open ?? false;
  const fechar = aoFechar ?? onClose ?? (() => {});
  const submeter = aoSubmeter ?? onSubmit ?? (() => {});

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
      titulo={mensagens.forms.customer.title}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
    >
      <CampoTextoFormulario<CriarCliente>
        name="nome"
        label={mensagens.forms.customer.name}
        size="small"
        fullWidth
        autoFocus
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<CriarCliente>
          name="documento"
          label={mensagens.forms.customer.document}
          size="small"
          fullWidth
        />
        <CampoTextoFormulario<CriarCliente>
          name="telefone"
          label={mensagens.forms.customer.phone}
          size="small"
          fullWidth
        />
      </Stack>
    </ModalFormulario>
  );
};

export default ModalFormularioCliente;
