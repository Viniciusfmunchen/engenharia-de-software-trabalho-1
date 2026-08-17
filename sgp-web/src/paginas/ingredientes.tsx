import ModalFormularioIngrediente from '@/componentes/ingredientes/modal-formulario-ingrediente';
import TabelaIngredientes from '@/componentes/ingredientes/tabela';
import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import { ENDPOINTS } from '@/constantes/rotas-api';
import { useObterPaginado } from '@/hooks/consulta';
import LayoutPagina from '@/layouts/pagina';
import { formatarMoeda } from '@/mocks/operacoes-mock';
import { ingredientesPaes } from '@/mocks/receitas-paes-mock';
import type { CriarIngrediente, Ingrediente } from '@/schemas/ingrediente';
import { coresPadaria } from '@/tema';

import { obterProximoId } from '@/utils/identificadores';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

const Ingredientes = () => {
  const [busca, setBusca] = useState('');
  const [formularioAberto, setFormularioAberto] = useState(false);

  const { data: ingredientes, totalElements } = useObterPaginado<Ingrediente>({
    endpoint: ENDPOINTS.INGREDIENTE.BASE
  })

  return (
    <LayoutPagina
      titulo={mensagens.pages.ingredients.title}
      aside={
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: coresPadaria.barraLateral,
            color: coresPadaria.textoClaro,
            '&:hover': { bgcolor: coresPadaria.barraLateralSelecionadaHover },
          }}
          onClick={() => setFormularioAberto(true)}
        >
          {mensagens.actions.addIngredient}
        </Button>
      }
    >
      <Stack spacing={2}>
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
          <Cartao
            titulo={mensagens.pages.ingredients.registered}
            conteudo={totalElements.toLocaleString('pt-BR')}
            informacao={mensagens.pages.ingredients.availableItems}
          />
          {/* <Cartao
            titulo={mensagens.pages.ingredients.lowStock}
            conteudo={resumo.quantidadeEstoqueBaixo.toLocaleString('pt-BR')}
            informacao={`${resumo.quantidadeEstoqueCritico} ${mensagens.pages.ingredients.criticalLevel}`}
          />
          <Cartao
            titulo={mensagens.pages.ingredients.stockValue}
            conteudo={formatarMoeda(resumo.valorEstoque)}
            informacao={mensagens.pages.ingredients.stockValueInfo}
          /> */}
        </Stack>

        {/*  {ingredientesEstoqueBaixo.length > 0 && (
          <Conteiner
            titulo={mensagens.pages.ingredients.stockAttention}
            subtitulo={ingredientesEstoqueBaixo
              .map((ingrediente) => ingrediente.nomeIngrediente)
              .join(', ')}
          >
            <Typography variant="body2" color="text.secondary">
              {mensagens.pages.ingredients.stockAttentionInfo}
            </Typography>
          </Conteiner>
        )} */}

        <Conteiner>
          <TextField
            fullWidth
            size="small"
            label={mensagens.pages.ingredients.searchLabel}
            placeholder={mensagens.pages.ingredients.searchPlaceholder}
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Conteiner>

        <TabelaIngredientes linhas={ingredientes} />
      </Stack>

      <ModalFormularioIngrediente
        aberto={formularioAberto}
        aoFechar={() => setFormularioAberto(false)}
      /* aoSubmeter={manipularAdicionarIngrediente} */
      />
    </LayoutPagina>
  );
};

export default Ingredientes;
