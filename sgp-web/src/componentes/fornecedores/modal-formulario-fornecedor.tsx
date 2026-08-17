import { CampoTextoFormulario } from '@/componentes/formularios/campos';
import ModalFormulario from '@/componentes/formularios/modal-formulario';
import { mensagens } from '@/constantes/mensagens';
import {
  fornecedorSchema,
  type FormularioFornecedorEntrada,
  type FormularioFornecedorValores,
} from '@/schemas/fornecedor';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesModalFormularioFornecedor {
  aberto?: boolean;
  open?: boolean;
  aoFechar?: () => void;
  onClose?: () => void;
  aoSubmeter?: (valores: FormularioFornecedorValores) => void;
  onSubmit?: (valores: FormularioFornecedorValores) => void;
}

const valoresPadrao: FormularioFornecedorEntrada = {
  nome: '',
  documento: '',
  telefone: '',
  nomeContato: '',
};

const ModalFormularioFornecedor = ({
  aberto,
  open,
  aoFechar,
  onClose,
  aoSubmeter,
  onSubmit,
}: PropriedadesModalFormularioFornecedor) => {
  const estaAberto = aberto ?? open ?? false;
  const fechar = aoFechar ?? onClose ?? (() => {});
  const submeter = aoSubmeter ?? onSubmit ?? (() => {});

  const formulario = useForm<FormularioFornecedorEntrada, unknown, FormularioFornecedorValores>({
    resolver: zodResolver(fornecedorSchema),
    defaultValues: valoresPadrao,
  });

  const manipularFechamento = () => {
    formulario.reset(valoresPadrao);
    fechar();
  };

  const manipularSubmissao = (valores: FormularioFornecedorValores) => {
    submeter(valores);
    manipularFechamento();
  };

  return (
    <ModalFormulario
      aberto={estaAberto}
      titulo={mensagens.forms.supplier.title}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
    >
      <CampoTextoFormulario<FormularioFornecedorEntrada>
        name="nome"
        label={mensagens.forms.supplier.name}
        size="small"
        fullWidth
        autoFocus
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<FormularioFornecedorEntrada>
          name="documento"
          label={mensagens.forms.supplier.document}
          size="small"
          fullWidth
        />
        <CampoTextoFormulario<FormularioFornecedorEntrada>
          name="telefone"
          label={mensagens.forms.supplier.phone}
          size="small"
          fullWidth
        />
      </Stack>

      <CampoTextoFormulario<FormularioFornecedorEntrada>
        name="nomeContato"
        label={mensagens.forms.supplier.contactName}
        size="small"
        fullWidth
      />
    </ModalFormulario>
  );
};

export default ModalFormularioFornecedor;
