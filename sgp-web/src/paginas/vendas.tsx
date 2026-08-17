import ModalFormularioCliente from '@/componentes/clientes/modal-formulario-cliente';
import ModalFormularioVenda from '@/componentes/vendas/modal-formulario-venda';
import TabelaClientes from '@/componentes/clientes/tabela';
import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import Tabela, { type ColunaTabela } from '@/componentes/ui/tabela';
import Abas from '@/componentes/ui/abas/abas';
import { mensagens } from '@/constantes/mensagens';
import LayoutPagina from '@/layouts/pagina';
import { receitasPaes } from '@/mocks/receitas-paes-mock';
import { obterClientes, salvarClientes } from '@/mocks/entidades-mock';
import {
  formatarData,
  formatarMoeda,
  obterFaturamentoVenda,
  obterLucroVenda,
  obterReceitaPorId,
  vendasMock,
} from '@/mocks/operacoes-mock';
import type { CriarCliente } from '@/schemas/cliente';
import type { CriarVenda } from '@/schemas/venda';
import { coresPadaria } from '@/tema';
import type { Cliente } from '@/tipos/cliente';
import type { Venda } from '@/tipos/venda';
import { obterProximoId } from '@/utils/identificadores';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useMemo, useState } from 'react';

const Vendas = () => {
  const [busca, setBusca] = useState('');
  const [vendas, setVendas] = useState(() => [...vendasMock]);
  const [clientes, setClientes] = useState(() => obterClientes());
  const [formularioVendaAberto, setFormularioVendaAberto] = useState(false);
  const [formularioClienteAberto, setFormularioClienteAberto] = useState(false);

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
        const receita = obterReceitaPorId(venda.idReceita);

        return `${venda.nomeComprador} ${receita?.nomeReceita ?? ''} ${venda.formaPagamento}`
          .toLocaleLowerCase('pt-BR')
          .includes(buscaNormalizada);
      })
    : vendas;

  const colunas: ColunaTabela<Venda>[] = [
    {
      id: 'data',
      label: mensagens.common.date,
      render: (linha) => formatarData(linha.data),
      sortAccessor: (linha) => new Date(linha.data),
    },
    {
      id: 'nomeComprador',
      label: mensagens.common.buyer,
      render: (linha) => linha.nomeComprador,
      sortAccessor: (linha) => linha.nomeComprador,
    },
    {
      id: 'pao',
      label: mensagens.common.bread,
      render: (linha) => obterReceitaPorId(linha.idReceita)?.nomeReceita ?? 'Receita removida',
      sortAccessor: (linha) => obterReceitaPorId(linha.idReceita)?.nomeReceita,
    },
    {
      id: 'quantidade',
      label: mensagens.common.units,
      align: 'right',
      render: (linha) => linha.quantidade.toLocaleString('pt-BR'),
      sortAccessor: (linha) => linha.quantidade,
    },
    {
      id: 'faturamento',
      label: mensagens.common.revenue,
      align: 'right',
      render: (linha) => formatarMoeda(obterFaturamentoVenda(linha)),
      sortAccessor: (linha) => obterFaturamentoVenda(linha),
    },
    {
      id: 'lucro',
      label: mensagens.common.estimatedProfit,
      align: 'right',
      render: (linha) => formatarMoeda(obterLucroVenda(linha)),
      sortAccessor: (linha) => obterLucroVenda(linha),
    },
  ];

  const manipularAdicionarVenda = (valores: CriarVenda) => {
    const novaVenda: Venda = {
      idVenda: obterProximoId(vendasMock, 'idVenda'),
      data: valores.data,
      nomeComprador: valores.nomeComprador,
      idReceita: valores.idReceita,
      quantidade: valores.quantidade,
      formaPagamento: valores.formaPagamento,
    };

    vendasMock.push(novaVenda);
    setVendas([...vendasMock]);
  };

  const manipularAdicionarCliente = (valores: CriarCliente) => {
    const novoCliente: Cliente = {
      idCliente: obterProximoId(clientes, 'idCliente'),
      nome: valores.nome,
      documento: valores.documento,
      telefone: valores.telefone,
    };
    const proximosClientes = [...clientes, novoCliente];

    salvarClientes(proximosClientes);
    setClientes(proximosClientes);
  };

  const conteudoVendas = (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Cartao
          titulo={mensagens.common.revenue}
          conteudo={formatarMoeda(resumo.faturamento)}
          informacao={mensagens.pages.sales.saleSum}
        />
        <Cartao
          titulo={mensagens.common.estimatedProfit}
          conteudo={formatarMoeda(resumo.lucro)}
          informacao={mensagens.pages.sales.priceMinusCost}
        />
        <Cartao
          titulo={mensagens.common.averageTicket}
          conteudo={formatarMoeda(resumo.ticketMedio)}
          informacao={`${resumo.pedidos} ${mensagens.pages.sales.registeredSales}`}
        />
      </Stack>

      <Conteiner>
        <TextField
          fullWidth
          size="small"
          label={mensagens.pages.sales.searchLabel}
          placeholder={mensagens.pages.sales.searchPlaceholder}
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

      <Tabela
        columns={colunas}
        rows={vendasFiltradas}
        getRowId={(linha) => linha.idVenda}
        defaultSort={{ columnId: 'data', direction: 'desc' }}
      />
    </Stack>
  );

  const conteudoClientes = (
    <Conteiner
      titulo={mensagens.common.customers}
      acao={
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: coresPadaria.barraLateral,
            color: coresPadaria.textoClaro,
            '&:hover': { bgcolor: coresPadaria.barraLateralSelecionadaHover },
          }}
          onClick={() => setFormularioClienteAberto(true)}
        >
          {mensagens.actions.addCustomer}
        </Button>
      }
      semEspacamento
    >
      <TabelaClientes linhas={clientes} />
    </Conteiner>
  );

  return (
    <LayoutPagina
      titulo={mensagens.pages.sales.title}
      aside={
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: coresPadaria.barraLateral,
            color: coresPadaria.textoClaro,
            '&:hover': { bgcolor: coresPadaria.barraLateralSelecionadaHover },
          }}
          onClick={() => setFormularioVendaAberto(true)}
        >
          {mensagens.actions.addSale}
        </Button>
      }
    >
      <>
        <Abas
          tabs={[
            { label: mensagens.tabs.sales, content: conteudoVendas },
            { label: mensagens.tabs.customers, content: conteudoClientes },
          ]}
        />

        <ModalFormularioVenda
          aberto={formularioVendaAberto}
          receitas={receitasPaes}
          clientes={clientes}
          aoFechar={() => setFormularioVendaAberto(false)}
          aoSubmeter={manipularAdicionarVenda}
        />

        <ModalFormularioCliente
          aberto={formularioClienteAberto}
          aoFechar={() => setFormularioClienteAberto(false)}
          aoSubmeter={manipularAdicionarCliente}
        />
      </>
    </LayoutPagina>
  );
};

export default Vendas;
