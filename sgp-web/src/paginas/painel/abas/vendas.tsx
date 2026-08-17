import TabelaVendas from '@/componentes/vendas/tabela';
import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import {
  formatarMoeda,
  obterFaturamentoVenda,
  obterLinhasVendasClientes,
  obterResumoVendas,
  vendasMock,
} from '@/mocks/operacoes-mock';
import type { FormaPagamento, LinhaPagamento } from '@/tipos/venda';
import { Chip, Stack, Typography } from '@mui/material';

const obterLinhasPagamento = () =>
  vendasMock.reduce<LinhaPagamento[]>((linhas, venda) => {
    const atual = linhas.find((linha) => linha.formaPagamento === venda.formaPagamento);

    if (atual) {
      atual.pedidos += 1;
      atual.faturamento += obterFaturamentoVenda(venda);
      return linhas;
    }

    linhas.push({
      formaPagamento: venda.formaPagamento as FormaPagamento,
      pedidos: 1,
      faturamento: obterFaturamentoVenda(venda),
    });

    return linhas;
  }, []);

const AbaVendas = () => {
  const resumo = obterResumoVendas();
  const linhasClientes = obterLinhasVendasClientes();
  const melhorComprador = linhasClientes[0];
  const linhasPagamento = obterLinhasPagamento().sort((a, b) => b.pedidos - a.pedidos);
  const pagamentoPreferido = linhasPagamento[0];

  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Cartao
          titulo={mensagens.common.revenue}
          conteudo={formatarMoeda(resumo.revenue)}
          informacao={mensagens.pages.sales.saleSum}
        />
        <Cartao
          titulo={mensagens.dashboardTabs.sales.bestBuyer}
          conteudo={melhorComprador?.nomeComprador ?? '-'}
          informacao={melhorComprador ? formatarMoeda(melhorComprador.faturamento) : '-'}
        />
        <Cartao
          titulo={mensagens.dashboardTabs.sales.buyerCount}
          conteudo={linhasClientes.length.toLocaleString('pt-BR')}
          informacao={`${resumo.orders} ${mensagens.pages.sales.registeredSales}`}
        />
        <Cartao
          titulo={mensagens.dashboardTabs.sales.preferredPayment}
          conteudo={pagamentoPreferido?.formaPagamento ?? '-'}
          informacao={
            pagamentoPreferido
              ? `${pagamentoPreferido.pedidos} ${mensagens.dashboardTabs.sales.ordersSuffix}`
              : '-'
          }
        />
      </Stack>

      <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ gap: 2, alignItems: 'flex-start' }}>
        <Conteiner
          titulo={mensagens.dashboardTabs.sales.paymentDistribution}
          subtitulo={mensagens.dashboardTabs.overview.registeredRevenue}
          sx={{ width: { xs: '100%', lg: 320 }, flexShrink: 0 }}
        >
          <Stack spacing={1}>
            {linhasPagamento.map((linha) => (
              <Stack
                key={linha.formaPagamento}
                direction="row"
                sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 1 }}
              >
                <Stack>
                  <Typography variant="body1">{linha.formaPagamento}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {linha.pedidos} {mensagens.dashboardTabs.sales.ordersSuffix}
                  </Typography>
                </Stack>
                <Chip size="small" label={formatarMoeda(linha.faturamento)} />
              </Stack>
            ))}
          </Stack>
        </Conteiner>

        <Stack sx={{ flex: 1, minWidth: 0, width: '100%' }}>
          <TabelaVendas />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AbaVendas;
