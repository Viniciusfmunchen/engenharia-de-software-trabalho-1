import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela/index';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/utils/formatar-moeda';
import type { Venda } from '@/schemas/venda';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Stack, TextField } from '@mui/material';
import { useMemo, useState } from 'react';

const formatarData = (data: string) => new Date(data).toLocaleDateString('pt-BR');

const AbaVendas = () => {
  const [busca, setBusca] = useState('');
  const vendas: Venda[] = []; // Isso virá do useObterPaginado no futuro

  // Mocking calculations
  const obterFaturamentoVenda = (venda: Venda) => venda.quantidade * 10;
  const obterLucroVenda = (venda: Venda) => venda.quantidade * 5;

  const resumo = useMemo(() => {
    const faturamento = vendas.reduce((total, venda) => total + obterFaturamentoVenda(venda), 0);
    const lucro = vendas.reduce((total, venda) => total + obterLucroVenda(venda), 0);

    return {
      faturamento,
      lucro,
      pedidos: vendas.length,
      ticketMedio: vendas.length ? faturamento / vendas.length : 0,
    };
  }, [vendas]);

  const buscaNormalizada = busca.trim().toLocaleLowerCase('pt-BR');
  const vendasFiltradas = buscaNormalizada
    ? vendas.filter((venda) => {
        return `${venda.nomeComprador} ${venda.formaPagamento}`
          .toLocaleLowerCase('pt-BR')
          .includes(buscaNormalizada);
      })
    : vendas;

  const colunas: ColunaTabela<Venda>[] = [
    {
      id: 'data',
      label: mensagens.comum.data,
      render: (linha) => formatarData(linha.data),
      sortAccessor: (linha) => new Date(linha.data),
    },
    {
      id: 'nomeComprador',
      label: mensagens.comum.comprador,
      render: (linha) => linha.nomeComprador,
      sortAccessor: (linha) => linha.nomeComprador,
    },
    {
      id: 'quantidade',
      label: mensagens.comum.unidades,
      align: 'right',
      render: (linha) => linha.quantidade.toLocaleString('pt-BR'),
      sortAccessor: (linha) => linha.quantidade,
    },
    {
      id: 'faturamento',
      label: mensagens.comum.faturamento,
      align: 'right',
      render: (linha) => formatarMoeda(obterFaturamentoVenda(linha)),
      sortAccessor: (linha) => obterFaturamentoVenda(linha),
    },
    {
      id: 'lucro',
      label: mensagens.comum.lucroEstimado,
      align: 'right',
      render: (linha) => formatarMoeda(obterLucroVenda(linha)),
      sortAccessor: (linha) => obterLucroVenda(linha),
    },
  ];

  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Cartao
          titulo={mensagens.comum.faturamento}
          conteudo={formatarMoeda(resumo.faturamento)}
          informacao={mensagens.paginas.vendas.somaVendas}
        />
        <Cartao
          titulo={mensagens.comum.lucroEstimado}
          conteudo={formatarMoeda(resumo.lucro)}
          informacao={mensagens.paginas.vendas.precoMenosCusto}
        />
        <Cartao
          titulo={mensagens.comum.ticketMedio}
          conteudo={formatarMoeda(resumo.ticketMedio)}
          informacao={`${resumo.pedidos} ${mensagens.paginas.vendas.vendasRegistradas}`}
        />
      </Stack>

      <Conteiner>
        <TextField
          fullWidth
          size="small"
          label={mensagens.paginas.vendas.pesquisar}
          placeholder={mensagens.paginas.vendas.placeholderPesquisa}
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

      <Tabela<Venda>
        colunas={colunas}
        linhas={vendasFiltradas}
        obterIdLinha={(linha) => linha.idVenda}
        ordenacaoPadrao={{ columnId: 'data', direction: 'desc' }}
      />
    </Stack>
  );
};

export default AbaVendas;
