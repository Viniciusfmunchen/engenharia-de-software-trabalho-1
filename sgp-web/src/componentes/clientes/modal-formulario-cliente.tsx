import { CampoTextoFormulario } from '@/componentes/formularios/campos';
import ModalFormulario from '@/componentes/formularios/modal-formulario';
import { mensagens } from '@/constantes/mensagens';
import {
  clienteSchema,
  type FormularioClienteEntrada,
  type FormularioClienteValores,
} from '@/schemas/cliente';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesModalFormularioCliente {
  aberto?: boolean;
  open?: boolean;
  aoFechar?: () => void;
  onClose?: () => void;
  aoSubmeter?: (valores: FormularioClienteValores) => void;
  onSubmit?: (valores: FormularioClienteValores) => void;
}

const valoresPadrao: FormularioClienteEntrada = {
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

  const formulario = useForm<FormularioClienteEntrada, unknown, FormularioClienteValores>({
    resolver: zodResolver(clienteSchema),
    defaultValues: valoresPadrao,
  });

  const manipularFechamento = () => {
    formulario.reset(valoresPadrao);
    fechar();
  };

  const manipularSubmissao = (valores: FormularioClienteValores) => {
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
      <CampoTextoFormulario<FormularioClienteEntrada>
        name="nome"
        label={mensagens.forms.customer.name}
        size="small"
        fullWidth
        autoFocus
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<FormularioClienteEntrada>
          name="documento"
          label={mensagens.forms.customer.document}
          size="small"
          fullWidth
        />
        <CampoTextoFormulario<FormularioClienteEntrada>
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
