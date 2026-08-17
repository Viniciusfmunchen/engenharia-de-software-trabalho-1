import { CampoSelecaoFormulario, CampoTextoFormulario } from '@/componentes/ui/formularios/campos';
import ModalFormulario from '@/componentes/ui/formularios/modal-formulario';
import { mensagens } from '@/constantes/mensagens';
import {
  formularioIngredienteSchema,
  type Ingrediente,
  type CriarIngrediente,
  criarIngredienteSchema,
} from '@/schemas/ingrediente';
import { resolverZod } from '@/utils/resolver';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { useAtualizarParcial, useCriar } from '@/hooks/mutacao';
import { ENDPOINTS } from '@/constantes/rotas-api';
import { useObterPaginado } from '@/hooks/consulta';
import type { UnidadeMedida } from '@/schemas/unidade-medida';
import type { CategoriaIngrediente } from '@/schemas/categoria-ingrediente';

interface PropriedadesModalFormularioIngrediente {
  aberto?: boolean;
  aoFechar?: () => void;
  aoSubmeter?: (valores: CriarIngrediente) => void;
  idIngrediente?: string | number
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
  aoFechar = () => { },
  aoSubmeter = () => { },
  idIngrediente
}: PropriedadesModalFormularioIngrediente) => {
  const queryClient = useQueryClient()

  const { data: categorias } = useObterPaginado<CategoriaIngrediente>({ endpoint: ENDPOINTS.INGREDIENTE.CATEGORIA })
  const { data: unidadesMedida } = useObterPaginado<UnidadeMedida>({ endpoint: ENDPOINTS.INGREDIENTE.UM })

  const criarIngredienteMutacao = useCriar<Ingrediente, CriarIngrediente>({
    onSuccess: (dadosCriados) => {
      console.log("Ingrediente criado com sucesso:", dadosCriados)
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.INGREDIENTE.BASE] })
    },
    onError: (erro) => {
      console.log("Erro ao criar ingrediente: ", erro)
    }
  })


  const atualizarIngredienteMutacao = useAtualizarParcial<Ingrediente, CriarIngrediente>({
    onSuccess: (dadosAtualizados) => {
      console.log("Ingrediente atualizado com sucesso:", dadosAtualizados)
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.INGREDIENTE.BASE] })
    },
    onError: (erro) => {
      console.log("Erro ao atualizar ingrediente: ", erro)
    }
  })

  const formulario = useForm<CriarIngrediente>({
    resolver: resolverZod(criarIngredienteSchema),
    defaultValues: valoresPadrao,
  });

  const manipularFechamento = () => {
    formulario.reset(valoresPadrao);
    aoFechar();
  };

  const manipularSubmissao = (valores: CriarIngrediente) => {
    if (idIngrediente) {
      atualizarIngredienteMutacao.mutate({ endpoint: ENDPOINTS.INGREDIENTE.POR_ID(idIngrediente), payload: valores })
    } else {
      criarIngredienteMutacao.mutate({ endpoint: ENDPOINTS.INGREDIENTE.BASE, payload: valores })
    }
    aoSubmeter(valores);
    manipularFechamento();
  };

  return (
    <ModalFormulario<CriarIngrediente>
      aberto={aberto}
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
          options={categorias?.map((categoria) => ({ label: categoria.nomeCategoria, value: categoria.idCategoriaIngrediente })) ?? []}
          size="small"
          fullWidth
        />
        <CampoSelecaoFormulario<CriarIngrediente>
          name="unidade"
          label={mensagens.forms.ingredient.unit}
          options={unidadesMedida?.map((um) => ({ label: um.nomeUnidade, value: um.idUnidadeIngrediente })) ?? []}
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
