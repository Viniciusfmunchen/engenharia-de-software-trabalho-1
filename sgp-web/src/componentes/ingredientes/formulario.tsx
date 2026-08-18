import { CampoSelecaoFormulario, CampoTextoFormulario } from '@/componentes/ui/formularios/campos';
import ModalFormulario from '@/componentes/ui/formularios/modal';
import { mensagens } from '@/constantes/mensagens';
import {
  criarIngredienteSchema,
  type Ingrediente,
  type CriarIngrediente,
} from '@/schemas/ingrediente';
import { resolverZod } from '@/utils/resolver';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { useAtualizarParcial, useCriar } from '@/hooks/mutacao';
import { ROTAS_API } from '@/constantes/rotas-api';
import { useObterPaginado } from '@/hooks/consulta';
import type { UnidadeMedida } from '@/schemas/unidade-medida';
import type { CategoriaIngrediente } from '@/schemas/categoria-ingrediente';

interface PropriedadesFormularioIngrediente {
  aberto?: boolean;
  aoFechar?: () => void;
  aoSubmeter?: (valores: CriarIngrediente) => void;
  idIngrediente?: string | number
}

const valoresPadrao: CriarIngrediente = {
  nomeIngrediente: '',
  idCategoriaIngrediente: 0,
  idUnidadeMedida: 0,
  custoPorUnidade: 0,
  estoqueAtual: 0,
  estoqueMinimo: 0,
};

const FormularioIngrediente = ({
  aberto,
  aoFechar = () => { },
  aoSubmeter = () => { },
  idIngrediente
}: PropriedadesFormularioIngrediente) => {
  const queryClient = useQueryClient()

  const { dados: categorias } = useObterPaginado<CategoriaIngrediente>({ endpoint: ROTAS_API.INGREDIENTE.CATEGORIA })
  const { dados: unidadesMedida } = useObterPaginado<UnidadeMedida>({ endpoint: ROTAS_API.UNIDADE.BASE })

  const criarIngredienteMutacao = useCriar<Ingrediente, CriarIngrediente>({
    onSuccess: (dadosCriados) => {
      console.log("Ingrediente criado com sucesso:", dadosCriados)
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.INGREDIENTE.BASE] })
    },
    onError: (erro) => {
      console.log("Erro ao criar ingrediente: ", erro)
    }
  })


  const atualizarIngredienteMutacao = useAtualizarParcial<Ingrediente, CriarIngrediente>({
    onSuccess: (dadosAtualizados) => {
      console.log("Ingrediente atualizado com sucesso:", dadosAtualizados)
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.INGREDIENTE.BASE] })
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
      atualizarIngredienteMutacao.mutate({ endpoint: ROTAS_API.INGREDIENTE.POR_ID(idIngrediente), payload: valores })
    } else {
      criarIngredienteMutacao.mutate({ endpoint: ROTAS_API.INGREDIENTE.BASE, payload: valores })
    }
    aoSubmeter(valores);
    manipularFechamento();
  };

  return (
    <ModalFormulario<CriarIngrediente>
      aberto={aberto}
      titulo={mensagens.formularios.ingrediente.titulo}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
    >
      <CampoTextoFormulario<CriarIngrediente>
        name="nomeIngrediente"
        label={mensagens.formularios.ingrediente.nome}
        size="small"
        autoFocus
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoSelecaoFormulario<CriarIngrediente>
          name="idCategoriaIngrediente"
          label={mensagens.formularios.ingrediente.categoria}
          options={categorias?.map((categoria) => ({ label: categoria.nomeCategoria, value: categoria.idCategoriaIngrediente })) ?? []}
          size="small"
          fullWidth
        />
        <CampoSelecaoFormulario<CriarIngrediente>
          name="idUnidadeMedida"
          label={mensagens.formularios.ingrediente.unidade}
          options={unidadesMedida?.map((um) => ({ label: um.nomeUnidadeMedida, value: um.idUnidadeMedida })) ?? []}
          size="small"
          fullWidth
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<CriarIngrediente>
          name="custoPorUnidade"
          label={mensagens.formularios.ingrediente.custoPorUnidade}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.0001' } }}
        />
        <CampoTextoFormulario<CriarIngrediente>
          name="estoqueAtual"
          label={mensagens.formularios.ingrediente.estoqueAtual}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
        <CampoTextoFormulario<CriarIngrediente>
          name="estoqueMinimo"
          label={mensagens.formularios.ingrediente.estoqueMinimo}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
      </Stack>
    </ModalFormulario>
  );
};

export default FormularioIngrediente;
