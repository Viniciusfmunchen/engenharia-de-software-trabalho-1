import ModalFormularioIngrediente from '@/componentes/ingredientes/formulario';
import TabelaIngredientes from '@/componentes/ingredientes/tabela';
import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import { ROTAS_API } from '@/constantes/rotas-api';
import { useObterPaginado } from '@/hooks/consulta';
import LayoutPagina from '@/layouts/pagina';
import type { Ingrediente } from '@/schemas/ingrediente';
import { coresPadaria } from '@/tema';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const Ingredientes = () => {
  const [busca, setBusca] = useState('');
  const [formularioAberto, setFormularioAberto] = useState(false);

  const { dados: ingredientes, totalElementos } = useObterPaginado<Ingrediente>({
    endpoint: ROTAS_API.INGREDIENTE.BASE
  })

  return (
    <LayoutPagina
      titulo={mensagens.paginas.ingredientes.titulo}
      lateral={
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
          {mensagens.acoes.adicionarIngrediente}
        </Button>
      }
    >
      <Stack spacing={2}>
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
          <Cartao
            titulo={mensagens.paginas.ingredientes.cadastrados}
            conteudo={totalElementos.toLocaleString('pt-BR')}
            informacao={mensagens.paginas.ingredientes.itensDisponiveis}
          />
          {/* <Cartao
            titulo={mensagens.paginas.ingredientes.estoqueBaixo}
            conteudo={resumo.quantidadeEstoqueBaixo.toLocaleString('pt-BR')}
            informacao={`${resumo.quantidadeEstoqueCritico} ${mensagens.paginas.ingredientes.nivelCritico}`}
          />
          <Cartao
            titulo={mensagens.paginas.ingredientes.valorEstoque}
            conteudo={formatarMoeda(resumo.valorEstoque)}
            informacao={mensagens.paginas.ingredientes.infoValorEstoque}
          /> */}
        </Stack>

        {/*  {ingredientesEstoqueBaixo.length > 0 && (
          <Conteiner
            titulo={mensagens.paginas.ingredientes.atencaoEstoque}
            subtitulo={ingredientesEstoqueBaixo
              .map((ingrediente) => ingrediente.nomeIngrediente)
              .join(', ')}
          >
            <Typography variant="body2" color="text.secondary">
              {mensagens.paginas.ingredientes.infoAtencaoEstoque}
            </Typography>
          </Conteiner>
        )} */}

        <Conteiner>
          <TextField
            fullWidth
            size="small"
            label={mensagens.paginas.ingredientes.pesquisar}
            placeholder={mensagens.paginas.ingredientes.placeholderPesquisa}
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

        <TabelaIngredientes ingredientes={ingredientes} />
      </Stack>

      <ModalFormularioIngrediente
        aberto={formularioAberto}
        aoFechar={() => setFormularioAberto(false)}
        aoSubmeter={(valores) => console.log(valores)}
      />
    </LayoutPagina>
  );
};

export default Ingredientes;
