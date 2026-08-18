import { Button, Chip, Divider, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'react-router';
import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/utils/formatar-moeda';
import { Edit, Delete } from '@mui/icons-material';
import { useObter } from '@/hooks/consulta';
import { useExcluir } from '@/hooks/mutacao';
import { ROTAS_API } from '@/constantes/rotas-api';
import type { Receita } from '@/schemas/receita';
import { ListaIngredientesReceita } from '../lista-ingredientes';
import ResumoReceita from '../resumo';
import FormularioReceita from '../formulario';
import { useState } from 'react';
import SimulacaoProducao from '../simulacao-producao';
import { useQueryClient } from '@tanstack/react-query';

import { AdicionarIngredienteReceita } from '../adicionar-ingrediente';

const VisualizacaoReceita = () => {
  const [searchParams] = useSearchParams();
  const [formularioAberto, setFormularioAberto] = useState(false);
  const [addIngredienteAberto, setAddIngredienteAberto] = useState(false);

  const idReceitaSelecionada = searchParams.get('idReceita') || searchParams.get('recipeId');
  const { dados: receita, isLoading } = useObter<Receita>({
    endpoint: ROTAS_API.RECEITA.POR_ID(idReceitaSelecionada),
    habilitado: !!idReceitaSelecionada,
  });

  const queryClient = useQueryClient();
  const mutacaoExcluir = useExcluir({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.RECEITA.BASE] });
    }
  });

  const mutacaoRemoverIngrediente = useExcluir({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.RECEITA.POR_ID(idReceitaSelecionada)] });
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.RECEITA.BASE] });
    }
  });

  if (!idReceitaSelecionada) {
    return (
      <Conteiner sx={{ width: '100%', height: '100%', minHeight: 240, justifyContent: 'center' }}>
        <Typography variant="body1" color="text.secondary" align="center">
          {mensagens.paginas.receitas.selecioneParaDetalhes}
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
          {mensagens.paginas.receitas.vazio}
        </Typography>
      </Conteiner>
    );
  }

  return (
    <Conteiner
      titulo={receita.nomeReceita}
      subtitulo={`${receita.rendimento ?? 0} ${mensagens.paginas.receitas.unidadesPorReceitaCompleto}`}
      acao={
        <Stack direction="row" spacing={1}>
          <Button size="small" color="error" startIcon={<Delete />} onClick={() => {
            if(window.confirm('Deseja realmente excluir esta receita?')) {
               mutacaoExcluir.mutate({ endpoint: ROTAS_API.RECEITA.POR_ID(idReceitaSelecionada) })
            }
          }}>
            Excluir
          </Button>
          <Button size="small" startIcon={<Edit />} onClick={() => setFormularioAberto(true)} >
            Editar
          </Button >
        </Stack>
      }
      sx={{ width: '100%', height: '100%' }}
      sxConteudo={{ gap: 2 }}
    >
      <ResumoReceita receita={receita} />
      <Divider />
      {
        receita.ingredientes && (
          <Stack spacing={1}>
            <Stack
              direction="row"
              sx={{ justifyContent: 'space-between', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h6">{mensagens.comum.ingredientes}</Typography>
                <Button size="small" onClick={() => setAddIngredienteAberto(true)}>
                  + Ingrediente
                </Button>
              </Stack>
              <Chip
                color="success"
                variant="outlined"
                label={`${mensagens.paginas.receitas.lucroEstimadoPorUnidade} ${formatarMoeda(0)}`}
              />
            </Stack>
            {receita.ingredientes.length > 0 ? (
                <ListaIngredientesReceita 
                    ingredientes={receita.ingredientes} 
                    onExcluir={(idIngrediente) => {
                        if (window.confirm("Remover este ingrediente?")) {
                            mutacaoRemoverIngrediente.mutate({ endpoint: `${ROTAS_API.RECEITA.POR_ID(idReceitaSelecionada)}/ingrediente/${idIngrediente}` });
                        }
                    }} 
                />
            ) : (
                <Typography variant="body2" color="text.secondary">Nenhum ingrediente adicionado.</Typography>
            )}
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
      <AdicionarIngredienteReceita
        idReceita={idReceitaSelecionada}
        aberto={addIngredienteAberto}
        aoFechar={() => setAddIngredienteAberto(false)}
      />
    </Conteiner >
  );
};

export default VisualizacaoReceita;
