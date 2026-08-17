import { CampoTextoFormulario } from '@/componentes/ui/formularios/campos';
import ModalFormulario from '@/componentes/ui/formularios/modal-formulario';
import { mensagens } from '@/constantes/mensagens';
import {
  fornecedorSchema,
  type CriarFornecedor,
} from '@/schemas/fornecedor';
import { resolverZod } from '@/utils/resolver';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesModalFormularioFornecedor {
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

const ModalFormularioFornecedor = ({
  aberto,
  open,
  aoFechar,
  onClose,
  aoSubmeter,
  onSubmit,
}: PropriedadesModalFormularioFornecedor) => {
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
      titulo={mensagens.forms.supplier.title}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
    >
      <CampoTextoFormulario<CriarFornecedor>
        name="nome"
        label={mensagens.forms.supplier.name}
        size="small"
        fullWidth
        autoFocus
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<CriarFornecedor>
          name="documento"
          label={mensagens.forms.supplier.document}
          size="small"
          fullWidth
        />
        <CampoTextoFormulario<CriarFornecedor>
          name="telefone"
          label={mensagens.forms.supplier.phone}
          size="small"
          fullWidth
        />
      </Stack>

      <CampoTextoFormulario<CriarFornecedor>
        name="nomeContato"
        label={mensagens.forms.supplier.contactName}
        size="small"
        fullWidth
      />
    </ModalFormulario>
  );
};

export default ModalFormularioFornecedor;
