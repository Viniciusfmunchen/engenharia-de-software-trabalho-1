import { CampoTextoFormulario } from '@/componentes/ui/formularios/campos';
import ModalFormulario from '@/componentes/ui/formularios/modal';
import { mensagens } from '@/constantes/mensagens';
import { ROTAS_API } from '@/constantes/rotas-api';
import { useAtualizarParcial, useCriar } from '@/hooks/mutacao';
import { useObter, useObterPaginado } from '@/hooks/consulta';
import {
  criarReceitaSchema,
  type CriarReceita,
  type Receita,
} from '@/schemas/receita';
import type { Ingrediente } from '@/schemas/ingrediente';
import ListaCamposIngredientes from './formulario/lista-campos-ingredientes';
import { resolverZod } from '@/utils/resolver';
import { Stack } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import type { UnidadeMedida } from '@/schemas/unidade-medida';
import { CampoSelecaoFormulario } from '@/componentes/ui/formularios/campos';

interface PropriedadesFormularioReceita {
  idReceita?: string | number;
  aberto?: boolean;
  aoFechar?: () => void;
  aoSubmeter?: (valores: CriarReceita) => void;
}

const obterValoresPadrao = (receita?: Receita): CriarReceita => (receita ? { ...receita, idUnidadeMedida: receita.unidadeMedida.idUnidadeMedida } : {
  nomeReceita: '',
  rendimento: 0,
  tempoPreparo: 0,
  ingredientes: [],
  idUnidadeMedida: 0,
  validade: 0
});

const FormularioReceita = ({
  aberto,
  aoFechar = () => { },
  aoSubmeter = () => { },
  idReceita
}: PropriedadesFormularioReceita) => {
  const { dados: ingredientes } = useObterPaginado<Ingrediente>({
    endpoint: ROTAS_API.INGREDIENTE.BASE,
    paginado: false
  });

  const { dados: unidadesMedida } = useObterPaginado<UnidadeMedida>({
    endpoint: ROTAS_API.UNIDADE.BASE,
    paginado: false
  });

  const { dados: receita } = useObter<Receita>({
    endpoint: ROTAS_API.RECEITA.POR_ID(idReceita),
    habilitado: !!idReceita
  })

  const valoresPadrao = obterValoresPadrao(receita)

  const queryClient = useQueryClient();

  const mutacaoCriarReceita = useCriar<Receita, CriarReceita>({
    onSuccess: (dadosCriados) => {
      console.log('Receita criada com sucesso:', dadosCriados);
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.RECEITA.BASE] });
    },
    onError: (erro) => {
      console.error('Erro ao salvar receita:', erro);
    },
  });

  const mutacaoEditarReceita = useAtualizarParcial<Receita, CriarReceita>({
    onSuccess: (dadosAtualizados) => {
      console.log('Receita editada com sucesso:', dadosAtualizados);
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.RECEITA.BASE] });
      if (idReceita) {
        queryClient.invalidateQueries({ queryKey: [ROTAS_API.RECEITA.POR_ID(idReceita)] });
      }
    },
    onError: (erro) => {
      console.error('Erro ao atualizar receita:', erro);
    }
  })

  const mutacaoEditarIngredientesReceita = useAtualizarParcial<Receita, CriarReceita>({
    onSuccess: (dadosAtualizados) => {
      console.log('Ingredientes da receita editada com sucesso:', dadosAtualizados);
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.RECEITA.BASE] });
      if (idReceita) {
        queryClient.invalidateQueries({ queryKey: [ROTAS_API.RECEITA.POR_ID(idReceita)] });
      }
    },
    onError: (erro) => {
      console.error('Erro ao atualizar ingredientes da receita:', erro);
    }
  })

  const formulario = useForm<CriarReceita>({
    resolver: resolverZod(criarReceitaSchema),
    values: valoresPadrao
  });

  const manipularFechamento = () => {
    formulario.reset(receita);
    aoFechar();
  };

  const manipularSubmissao = (valores: CriarReceita) => {
    if (idReceita) {
      console.log(valores)
      mutacaoEditarReceita.mutate({ endpoint: ROTAS_API.RECEITA.POR_ID(idReceita), payload: valores })
      valores.ingredientes.map((ingrediente) => {

      })
    } else {
      mutacaoCriarReceita.mutate({ endpoint: ROTAS_API.RECEITA.BASE, payload: valores });
    }
    aoSubmeter(valores);
    manipularFechamento();
  };


  return (
    <ModalFormulario<CriarReceita>
      aberto={aberto}
      titulo={mensagens.formularios.receita.titulo}
      formulario={formulario}
      aoFechar={manipularFechamento}
      aoSubmeter={manipularSubmissao}
      larguraMaxima="lg"
    >
      <CampoTextoFormulario<CriarReceita>
        name="nomeReceita"
        label={mensagens.formularios.receita.nome}
        size="small"
        autoFocus
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoSelecaoFormulario<CriarReceita>
          name="idUnidadeMedida"
          label="Unidade de Medida"
          options={unidadesMedida?.map((um) => ({ label: um.nomeUnidadeMedida, value: um.idUnidadeMedida })) ?? []}
          size="small"
          fullWidth
        />
        <CampoTextoFormulario<CriarReceita>
          name="rendimento"
          label={mensagens.formularios.receita.rendimento}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 1, step: 1 } }}
        />
        <CampoTextoFormulario<CriarReceita>
          name="tempoPreparo"
          label={mensagens.formularios.receita.tempoPreparo}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 1, step: 1 } }}
        />
        <CampoTextoFormulario<CriarReceita>
          name="validade"
          label="Validade (dias)"
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 1, step: 1 } }}
        />
      </Stack>

      {!idReceita && <ListaCamposIngredientes ingredientes={ingredientes ?? []} />}
    </ModalFormulario>
  );
};

export default FormularioReceita;
