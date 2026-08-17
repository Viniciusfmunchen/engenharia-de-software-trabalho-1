import { Button, Chip, Divider, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'react-router';
import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/mocks/operacoes-mock';
import { Edit } from '@mui/icons-material';
import { useObter } from '@/hooks/consulta';
import { ENDPOINTS } from '@/constantes/rotas-api';
import type { Receita } from '@/schemas/receita';
import { ListaIngredientesReceita } from '../lista-ingredientes';
import ResumoReceita from '../resumo';
import FormularioReceita from '../formulario';
import { useState } from 'react';
import SimulacaoProducao from '../simulacao-producao';

const VisualizacaoReceita = () => {
  const [searchParams] = useSearchParams();
  const [formularioAberto, setFormularioAberto] = useState(false);

  const idReceitaSelecionada = searchParams.get('idReceita') || searchParams.get('recipeId');
  const { data: receita, isLoading } = useObter<Receita>({
    endpoint: ENDPOINTS.RECEITA.POR_ID(idReceitaSelecionada),
    habilitado: !!idReceitaSelecionada,
  });

  if (!idReceitaSelecionada) {
    return (
      <Conteiner sx={{ width: '100%', height: '100%', minHeight: 240, justifyContent: 'center' }}>
        <Typography variant="body1" color="text.secondary" align="center">
          {mensagens.pages.recipes.selectForDetails}
        </Typography>
      </Conteiner>
    );
  }

  if (isLoading) {
    return (
      <Conteiner sx={{ width: '100%', height: '100%', minHeight: 240, justifyContent: 'center' }}>
        <Typography variant="body1" color="text.secondary" align="center">
          Carregando receita...
        </Typography>
      </Conteiner>
    );
  }

  if (!receita) {
    return (
      <Conteiner sx={{ width: '100%', height: '100%', minHeight: 240, justifyContent: 'center' }}>
        <Typography variant="body1" color="text.secondary" align="center">
          {mensagens.pages.recipes.empty}
        </Typography>
      </Conteiner>
    );
  }

  return (
    <Conteiner
      titulo={receita.nomeReceita}
      subtitulo={`${receita.rendimento ?? 0} ${mensagens.pages.recipes.unitsPerRecipeFull}`}
      acao={
        <Button size="small" startIcon={<Edit />} onClick={() => setFormularioAberto(true)} >
          Editar
        </Button >
      }
      sx={{ width: '100%', height: '100%' }}
      contentSx={{ gap: 2 }}
    >
      <ResumoReceita receita={receita} />
      <Divider />
      {
        receita.ingredientes && receita.ingredientes.length > 0 && (
          <Stack spacing={1}>
            <Stack
              direction="row"
              sx={{ justifyContent: 'space-between', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}
            >
              <Typography variant="h6">{mensagens.common.ingredients}</Typography>
              <Chip
                color="success"
                variant="outlined"
                label={`${mensagens.pages.recipes.estimatedProfitPerUnit} ${formatarMoeda(0)}`}
              />
            </Stack>
            <ListaIngredientesReceita ingredientes={receita.ingredientes} />
          </Stack>
        )
      }
      <Divider />
      <SimulacaoProducao />
      <FormularioReceita
        idReceita={idReceitaSelecionada}
        aberto={formularioAberto}
        aoFechar={() => setFormularioAberto(false)}
      />
    </Conteiner >
  );
};

export default VisualizacaoReceita;
