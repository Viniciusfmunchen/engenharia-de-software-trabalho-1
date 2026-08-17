import Cartao from '@/componentes/ui/cartao';
import Abas from '@/componentes/ui/abas/abas';
import { mensagens } from '@/constantes/mensagens';
import LayoutPagina from '@/layouts/pagina';
import {
  formatarMoeda,
  obterResumoCompras,
  obterResumoEstoque,
  obterResumoVendas,
} from '@/mocks/operacoes-mock';
import { Stack, Typography } from '@mui/material';
import AbaPaes from './abas/paes';
import AbaCompras from './abas/compras';
import AbaVendas from './abas/vendas';

const Painel = () => {
  const resumoVendas = obterResumoVendas();
  const resumoCompras = obterResumoCompras();
  const resumoEstoque = obterResumoEstoque();

  return (
    <LayoutPagina
      titulo={mensagens.pages.dashboard.title}
      aside={
        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
          {mensagens.pages.dashboard.period}
        </Typography>
      }
    >
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1, padding: 2 }}>
        <Cartao
          titulo={mensagens.pages.dashboard.totalSold}
          conteudo={formatarMoeda(resumoVendas.revenue)}
          informacao={mensagens.pages.dashboard.soldSum}
        />
        <Cartao
          titulo={mensagens.common.estimatedProfit}
          conteudo={formatarMoeda(resumoVendas.profit)}
          informacao={mensagens.pages.dashboard.profitInfo}
        />
        <Cartao
          titulo={mensagens.pages.dashboard.purchases}
          conteudo={formatarMoeda(resumoCompras.total)}
          informacao={`${resumoCompras.pendingCount} ${mensagens.pages.dashboard.pendingPurchases}`}
        />
        <Cartao
          titulo={mensagens.pages.dashboard.lowStock}
          conteudo={resumoEstoque.lowStockCount.toLocaleString('pt-BR')}
          informacao={`${resumoEstoque.criticalStockCount} ${mensagens.pages.dashboard.criticalIngredients}`}
        />
      </Stack>
      <Abas
        tabs={[
          {
            label: mensagens.tabs.sales,
            content: <AbaVendas />,
          },
          {
            label: mensagens.tabs.purchases,
            content: <AbaCompras />,
          },
          {
            label: mensagens.tabs.breads,
            content: <AbaPaes />,
          },
        ]}
      />
    </LayoutPagina>
  );
};

export default Painel;
