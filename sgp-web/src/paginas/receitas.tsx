import { mensagens } from '@/constantes/mensagens';
import LayoutPagina from '@/layouts/pagina';
import { coresPadaria } from '@/tema';
import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ListaReceitas from '@/componentes/receitas/lista';
import Conteiner from '@/componentes/ui/conteiner';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useObterPaginado } from '@/hooks/consulta';
import { ROTAS_API } from '@/constantes/rotas-api';
import type { Receita } from '@/schemas/receita';
import VisualizacaoReceita from '@/componentes/receitas/visualizacao';
import FormularioReceita from '@/componentes/receitas/formulario';

const Receitas = () => {
  const [formularioAberto, setFormularioAberto] = useState(false);
  const [busca, setBusca] = useState('');
  const { dados: receitas } = useObterPaginado<Receita>({
    endpoint: ROTAS_API.RECEITA.BASE,
  });

  return (
    <LayoutPagina
      titulo={mensagens.paginas.receitas.titulo}
      lateral={
        <Button
          variant="contained"
          startIcon={<RestaurantMenuIcon />}
          sx={{
            bgcolor: coresPadaria.barraLateral,
            color: coresPadaria.textoClaro,
            '&:hover': {
              bgcolor: coresPadaria.barraLateralSelecionadaHover,
            },
          }}
          onClick={() => setFormularioAberto(true)}
        >
          {mensagens.acoes.adicionarReceita}
        </Button>
      }
    >
      <Stack spacing={2}>
        <Conteiner>
          <TextField
            fullWidth
            size="small"
            label={mensagens.paginas.receitas.pesquisar}
            placeholder={mensagens.paginas.receitas.placeholderPesquisa}
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

        {receitas && receitas.length > 0 ? (
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            sx={{ gap: 2, alignItems: 'flex-start', minHeight: 0 }}
          >
            <ListaReceitas receitas={receitas} />
            <VisualizacaoReceita />
          </Stack>
        ) : (
          <Conteiner>
            <Stack spacing={2}>
              <Stack sx={{ alignItems: 'center', justifyContent: 'center', height: 200 }}>
                <Typography>{mensagens.paginas.receitas.vazio}</Typography>
              </Stack>
            </Stack>
          </Conteiner>
        )}
      </Stack>

      <FormularioReceita
        aberto={formularioAberto}
        aoFechar={() => setFormularioAberto(false)}
      />
    </LayoutPagina>
  );
};

export default Receitas;
