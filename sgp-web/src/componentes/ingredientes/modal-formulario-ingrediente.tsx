import { CampoSelecaoFormulario, CampoTextoFormulario } from '@/componentes/formularios/campos';
import ModalFormulario from '@/componentes/formularios/modal-formulario';
import {
  opcoesCategoriaIngrediente,
  opcoesUnidadeIngrediente,
} from '@/constantes/opcoes-formulario';
import { mensagens } from '@/constantes/mensagens';
import {
  formularioIngredienteSchema,
  type FormularioIngredienteEntrada,
  type FormularioIngredienteValores,
} from '@/schemas/ingrediente';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PropriedadesModalFormularioIngrediente {
  aberto?: boolean;
  open?: boolean;
  aoFechar?: () => void;
  onClose?: () => void;
  aoSubmeter?: (valores: FormularioIngredienteValores) => void;
  onSubmit?: (valores: FormularioIngredienteValores) => void;
}

const valoresPadrao: FormularioIngredienteEntrada = {
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

  const formulario = useForm<FormularioIngredienteEntrada, unknown, FormularioIngredienteValores>({
    resolver: zodResolver(formularioIngredienteSchema),
    defaultValues: valoresPadrao,
  });

  const manipularFechamento = () => {
    formulario.reset(valoresPadrao);
    fechar();
  };

  const manipularSubmissao = (valores: FormularioIngredienteValores) => {
    submeter(valores);
    manipularFechamento();
  };

  return (
    <ModalFormulario
      aberto={estaAberto}
      titulo={mensagens.forms.ingredient.title}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
    >
      <CampoTextoFormulario<FormularioIngredienteEntrada>
        name="nomeIngrediente"
        label={mensagens.forms.ingredient.name}
        size="small"
        autoFocus
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoSelecaoFormulario<FormularioIngredienteEntrada>
          name="categoria"
          label={mensagens.forms.ingredient.category}
          options={opcoesCategoriaIngrediente}
          size="small"
          fullWidth
        />
        <CampoSelecaoFormulario<FormularioIngredienteEntrada>
          name="unidade"
          label={mensagens.forms.ingredient.unit}
          options={opcoesUnidadeIngrediente}
          size="small"
          fullWidth
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<FormularioIngredienteEntrada>
          name="precoPorUnidade"
          label={mensagens.forms.ingredient.costPerUnit}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.0001' } }}
        />
        <CampoTextoFormulario<FormularioIngredienteEntrada>
          name="estoqueAtual"
          label={mensagens.forms.ingredient.stockQuantity}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
        <CampoTextoFormulario<FormularioIngredienteEntrada>
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
