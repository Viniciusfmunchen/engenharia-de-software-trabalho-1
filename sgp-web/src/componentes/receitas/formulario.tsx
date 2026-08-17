import { CampoSelecaoFormulario, CampoTextoFormulario } from '@/componentes/ui/formularios/campos';
import ModalFormulario from '@/componentes/ui/formularios/modal-formulario';
import { mensagens } from '@/constantes/mensagens';
import { ENDPOINTS } from '@/constantes/rotas-api';
import { useAtualizarParcial, useCriar } from '@/hooks/mutacao';
import { useObter, useObterPaginado } from '@/hooks/consulta';
import {
  criarReceitaSchema,
  type CriarReceita,
  type Receita,
} from '@/schemas/receita';
import type { Ingrediente } from '@/tipos/ingrediente';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { resolverZod } from '@/utils/resolver';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useFieldArray, useForm } from 'react-hook-form';

interface PropriedadesFormularioReceita {
  idReceita?: string | number;
  aberto?: boolean;
  aoFechar?: () => void;
  aoSubmeter?: (valores: CriarReceita) => void;
}

const obterValoresPadrao = (receita?: Receita): CriarReceita => (receita ? { ...receita } : {
  nomeReceita: '',
  rendimento: 1,
  tempoPreparacao: 1,
  precoVenda: 0,
  ingredientes: [],
});

const FormularioReceita = ({
  aberto,
  aoFechar = () => { },
  aoSubmeter = () => { },
  idReceita
}: PropriedadesFormularioReceita) => {
  const { data: ingredientes } = useObter<Ingrediente[]>({
    endpoint: ENDPOINTS.INGREDIENTE.BASE,
  });

  const { data: receita } = useObter<Receita>({
    endpoint: ENDPOINTS.RECEITA.POR_ID(idReceita),
    habilitado: !!idReceita
  })

  const valoresPadrao = obterValoresPadrao(receita)

  const queryClient = useQueryClient();

  const mutacaoCriarReceita = useCriar<Receita, CriarReceita>({
    onSuccess: (dadosCriados) => {
      console.log('Receita criada com sucesso:', dadosCriados);
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.RECEITA.BASE] });
    },
    onError: (erro) => {
      console.error('Erro ao salvar receita:', erro);
    },
  });

  const mutacaoEditarReceita = useAtualizarParcial<Receita, CriarReceita>({
    onSuccess: (dadosAtualizados) => {
      console.log('Receita editada com sucesso:', dadosAtualizados);
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.RECEITA.BASE] });
      if (idReceita) {
        queryClient.invalidateQueries({ queryKey: [ENDPOINTS.RECEITA.POR_ID(idReceita)] });
      }
    },
    onError: (erro) => {
      console.error('Erro ao atualizar receita:', erro);
    }
  })

  const formulario = useForm<CriarReceita>({
    resolver: resolverZod(criarReceitaSchema),
    defaultValues: valoresPadrao
  });

  const { fields, append, remove } = useFieldArray({
    control: formulario.control,
    name: 'ingredientes',
  });

  const manipularFechamento = () => {
    formulario.reset();
    aoFechar();
  };

  const manipularSubmissao = (valores: CriarReceita) => {
    if (idReceita) {
      mutacaoEditarReceita.mutate({ endpoint: ENDPOINTS.RECEITA.POR_ID(idReceita), payload: valores })
    } else {
      mutacaoCriarReceita.mutate({ endpoint: ENDPOINTS.RECEITA.BASE, payload: valores });
    }
    aoSubmeter(valores);
    manipularFechamento();
  };

  const adicionarIngrediente = () =>
    append({
      idIngrediente: ingredientes[0]?.idIngrediente ?? 1,
      quantidade: 1,
    });

  return (
    <ModalFormulario<CriarReceita>
      aberto={aberto}
      titulo={mensagens.forms.recipe.title}
      formulario={formulario}
      aoFechar={manipularFechamento}
      onSubmit={manipularSubmissao}
      larguraMaxima="lg"
    >
      <CampoTextoFormulario<CriarReceita>
        name="nomeReceita"
        label={mensagens.forms.recipe.name}
        size="small"
        autoFocus
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <CampoTextoFormulario<CriarReceita>
          name="precoVenda"
          label={mensagens.forms.recipe.salePrice}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
        <CampoTextoFormulario<CriarReceita>
          name="rendimento"
          label={mensagens.forms.recipe.yieldUnits}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 1, step: 1 } }}
        />
        <CampoTextoFormulario<CriarReceita>
          name="tempoPreparacao"
          label={mensagens.forms.recipe.preparationTimeMinutes}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 1, step: 1 } }}
        />
      </Stack>

      <Stack spacing={1}>
        <Stack
          direction="row"
          sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 1 }}
        >
          <Typography variant="h6">{mensagens.forms.recipe.ingredientsSection}</Typography>
          <Button
            type="button"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={adicionarIngrediente}
          >
            {mensagens.forms.recipe.addIngredient}
          </Button>
        </Stack>

        {fields.map((campo, indice) => (
          <Stack
            key={campo.id}
            direction={{ xs: 'column', sm: 'row' }}
            sx={{ alignItems: { sm: 'flex-start' }, gap: 1 }}
          >
            <CampoSelecaoFormulario<CriarReceita>
              name={`ingredientes.${indice}.idIngrediente`}
              label={mensagens.forms.recipe.ingredient}
              options={ingredientes.map((ingrediente) => ({
                value: ingrediente.idIngrediente,
                label: ingrediente.nomeIngrediente,
              }))}
              size="small"
              fullWidth
            />
            <CampoTextoFormulario<CriarReceita>
              name={`ingredientes.${indice}.quantidade`}
              label={mensagens.common.quantity}
              type="number"
              size="small"
              sx={{ width: { xs: '100%', sm: 180 } }}
              slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
            />
            <IconButton
              type="button"
              aria-label={mensagens.forms.recipe.removeIngredient}
              onClick={() => remove(indice)}
              disabled={fields.length === 1}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        ))}
      </Stack>
    </ModalFormulario>
  );
};

export default FormularioReceita;
