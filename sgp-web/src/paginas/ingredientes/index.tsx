import ModalFormularioIngrediente from '@/componentes/ingredientes/formulario';
import TabelaIngredientes from '@/componentes/ingredientes/tabela';
import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import { ROTAS_API } from '@/constantes/rotas-api';
import { useObter, useObterPaginado } from '@/hooks/consulta';
import LayoutPagina from '@/layouts/pagina';
import type { Ingrediente } from '@/schemas/ingrediente';
import { coresPadaria } from '@/tema';
import { formatarMoeda } from '@/utils/formatar-moeda';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

const Ingredientes = () => {
  const [formularioAberto, setFormularioAberto] = useState(false);
  const [busca, setBusca] = useState('');
  const [buscaRetardada, setBuscaRetardada] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setBuscaRetardada(busca);
    }, 500);

    return () => clearTimeout(timer);
  }, [busca]);

  const { dados: ingredientesInfo } = useObter<{ estoqueBaixo: number, valorTotalEstoque: number }>({
    endpoint: `${ROTAS_API.INGREDIENTE.BASE}/info`
  })

  const { dados: ingredientes, totalElementos } = useObterPaginado<Ingrediente>({
    endpoint: ROTAS_API.INGREDIENTE.BASE,
    parametrosRequisicao: {
      nomeIngrediente: buscaRetardada
    }
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
          onClick={() => {
            setFormularioAberto(true);
          }}
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
          <Cartao
            titulo={mensagens.paginas.ingredientes.estoqueBaixo}
            conteudo={ingredientesInfo?.estoqueBaixo.toLocaleString('pt-BR') ?? '-'}
            informacao={mensagens.paginas.ingredientes.atencaoEstoque}
          />
          <Cartao
            titulo={mensagens.paginas.ingredientes.valorEstoque}
            conteudo={formatarMoeda(ingredientesInfo?.valorTotalEstoque ?? 0)}
            informacao={mensagens.paginas.ingredientes.infoValorEstoque}
          />
        </Stack>

        <Conteiner>
          <TextField
            fullWidth
            size="small"
            label={mensagens.paginas.ingredientes.pesquisar}
            placeholder='Nome do ingrediente...'
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

        <TabelaIngredientes
          ingredientes={ingredientes}
        />
      </Stack>

      <ModalFormularioIngrediente
        aberto={formularioAberto}
        aoFechar={() => {
          setFormularioAberto(false);
        }}
        aoSubmeter={(valores) => console.log(valores)}
      />
    </LayoutPagina>
  );
};

export default Ingredientes;
