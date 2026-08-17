import ModalFormularioIngrediente from '@/componentes/ingredientes/modal-formulario-ingrediente';
import TabelaIngredientes from '@/componentes/ingredientes/tabela';
import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import LayoutPagina from '@/layouts/pagina';
import { formatarMoeda } from '@/mocks/operacoes-mock';
import { ingredientesPaes } from '@/mocks/receitas-paes-mock';
import type { CriarIngrediente } from '@/schemas/ingrediente';
import { coresPadaria } from '@/tema';
import type { Ingrediente } from '@/tipos/ingrediente';
import { obterProximoId } from '@/utils/identificadores';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

const categoriasNomeMap: Record<string, string> = {
  farinha: 'Farinha',
  fermento: 'Fermento',
  tempero: 'Tempero',
  açucar: 'Açúcar',
  liquido: 'Líquidos',
  gordura: 'Gordura',
  vegetal: 'Vegetais',
  grao: 'Grãos',
  recheio: 'Recheios',
  outro: 'Outros',
};

const unidadesNomeMap: Record<string, { nome: string; abrev: string }> = {
  g: { nome: 'Grama', abrev: 'g' },
  ml: { nome: 'Mililitro', abrev: 'ml' },
  un: { nome: 'Unidade', abrev: 'un' },
};

const Ingredientes = () => {
  const [busca, setBusca] = useState('');
  const [ingredientes, setIngredientes] = useState(() => [...ingredientesPaes]);
  const [formularioAberto, setFormularioAberto] = useState(false);

  const ingredientesEstoqueBaixo = useMemo(
    () =>
      ingredientes.filter(
        (ingrediente) => ingrediente.estoqueAtual <= ingrediente.estoqueMinimo,
      ),
    [ingredientes],
  );

  const resumo = useMemo(
    () => ({
      totalIngredientes: ingredientes.length,
      quantidadeEstoqueBaixo: ingredientesEstoqueBaixo.length,
      quantidadeEstoqueCritico: ingredientes.filter(
        (ingrediente) => ingrediente.estoqueAtual <= ingrediente.estoqueMinimo * 0.5,
      ).length,
      valorEstoque: ingredientes.reduce(
        (soma, ingrediente) => soma + ingrediente.estoqueAtual * ingrediente.precoPorUnidade,
        0,
      ),
    }),
    [ingredientes, ingredientesEstoqueBaixo],
  );

  const buscaNormalizada = busca.trim().toLocaleLowerCase('pt-BR');
  const ingredientesFiltrados = buscaNormalizada
    ? ingredientes.filter((ingrediente) =>
        `${ingrediente.nomeIngrediente} ${ingrediente.categoriaIngrediente.nomeCategoria}`
          .toLocaleLowerCase('pt-BR')
          .includes(buscaNormalizada),
      )
    : ingredientes;

  const manipularAdicionarIngrediente = (valores: CriarIngrediente) => {
    const novoIngrediente: Ingrediente = {
      idIngrediente: obterProximoId(ingredientesPaes, 'idIngrediente'),
      nomeIngrediente: valores.nomeIngrediente,
      categoriaIngrediente: {
        idCategoriaIngrediente: 1,
        nomeCategoria: categoriasNomeMap[valores.categoria] || valores.categoria,
      },
      unidadeIngrediente: {
        idUnidadeIngrediente: 1,
        nomeUnidade: unidadesNomeMap[valores.unidade]?.nome || 'Grama',
        abreviacaoUnidade: unidadesNomeMap[valores.unidade]?.abrev || valores.unidade,
      },
      precoPorUnidade: valores.precoPorUnidade,
      estoqueAtual: valores.estoqueAtual,
      estoqueMinimo: valores.estoqueMinimo,
    };

    ingredientesPaes.push(novoIngrediente);
    setIngredientes([...ingredientesPaes]);
  };

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
            conteudo={resumo.totalIngredientes.toLocaleString('pt-BR')}
            informacao={mensagens.pages.ingredients.availableItems}
          />
          <Cartao
            titulo={mensagens.pages.ingredients.lowStock}
            conteudo={resumo.quantidadeEstoqueBaixo.toLocaleString('pt-BR')}
            informacao={`${resumo.quantidadeEstoqueCritico} ${mensagens.pages.ingredients.criticalLevel}`}
          />
          <Cartao
            titulo={mensagens.pages.ingredients.stockValue}
            conteudo={formatarMoeda(resumo.valorEstoque)}
            informacao={mensagens.pages.ingredients.stockValueInfo}
          />
        </Stack>

        {ingredientesEstoqueBaixo.length > 0 && (
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
        )}

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

        <TabelaIngredientes linhas={ingredientesFiltrados} />
      </Stack>

      <ModalFormularioIngrediente
        aberto={formularioAberto}
        aoFechar={() => setFormularioAberto(false)}
        aoSubmeter={manipularAdicionarIngrediente}
      />
    </LayoutPagina>
  );
};

export default Ingredientes;
