import { CampoSelecaoFormulario, CampoTextoFormulario } from '@/componentes/formularios/campos';
import ModalFormulario from '@/componentes/formularios/modal-formulario';
import {
  opcoesCategoriaIngrediente,
  opcoesUnidadeIngrediente,
} from '@/constantes/opcoes-formulario';
import { mensagens } from '@/constantes/mensagens';
import {
  formularioIngredienteSchema,
  type CriarIngrediente,
} from '@/schemas/ingrediente';
import { resolverZod } from '@/utils/resolver';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesModalFormularioIngrediente {
  aberto?: boolean;
  open?: boolean;
  aoFechar?: () => void;
  onClose?: () => void;
  aoSubmeter?: (valores: CriarIngrediente) => void;
  onSubmit?: (valores: CriarIngrediente) => void;
}

const valoresPadrao: CriarIngrediente = {
  nomeIngrediente: '',
  categoria: 'farinha',
  unidade: 'g',
  precoPorUnidade: 0,
  estoqueAtual: 0,
  estoqueMinimo: 0,
};

const ModalFormularioIngrediente = ({
  aberto,
  open,
  aoFechar,
  onClose,
  aoSubmeter,
  onSubmit,
}: PropriedadesModalFormularioIngrediente) => {
  const estaAberto = aberto ?? open ?? false;
  const fechar = aoFechar ?? onClose ?? (() => {});
  const submeter = aoSubmeter ?? onSubmit ?? (() => {});

  const formulario = useForm<CriarIngrediente>({
    resolver: resolverZod(formularioIngredienteSchema),
    defaultValues: valoresPadrao,
  });

  const manipularFechamento = () => {
    formulario.reset(valoresPadrao);
    fechar();
  };

  const manipularSubmissao = (valores: CriarIngrediente) => {
    submeter(valores);
    manipularFechamento();
  };

  return (
    <ModalFormulario<CriarIngrediente>
      aberto={estaAberto}
      titulo={mensagens.forms.ingredient.title}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
    >
      <CampoTextoFormulario<CriarIngrediente>
        name="nomeIngrediente"
        label={mensagens.forms.ingredient.name}
        size="small"
        autoFocus
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoSelecaoFormulario<CriarIngrediente>
          name="categoria"
          label={mensagens.forms.ingredient.category}
          options={opcoesCategoriaIngrediente}
          size="small"
          fullWidth
        />
        <CampoSelecaoFormulario<CriarIngrediente>
          name="unidade"
          label={mensagens.forms.ingredient.unit}
          options={opcoesUnidadeIngrediente}
          size="small"
          fullWidth
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<CriarIngrediente>
          name="precoPorUnidade"
          label={mensagens.forms.ingredient.costPerUnit}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.0001' } }}
        />
        <CampoTextoFormulario<CriarIngrediente>
          name="estoqueAtual"
          label={mensagens.forms.ingredient.stockQuantity}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
        <CampoTextoFormulario<CriarIngrediente>
          name="estoqueMinimo"
          label={mensagens.forms.ingredient.minStockQuantity}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
      </Stack>
    </ModalFormulario>
  );
};

export default ModalFormularioIngrediente;
