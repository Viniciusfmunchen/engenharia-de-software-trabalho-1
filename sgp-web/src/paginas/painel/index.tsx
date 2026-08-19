import Cartao from '@/componentes/ui/cartao';
import Abas from '@/componentes/ui/abas';
import { mensagens } from '@/constantes/mensagens';
import LayoutPagina from '@/layouts/pagina';
import { formatarMoeda } from '@/utils/formatar-moeda';
import { Stack, Typography } from '@mui/material';
import AbaPaes from './abas/paes';
import AbaCompras from './abas/compras';
import AbaVendas from './abas/vendas';

const Painel = () => {
  const resumoVendas = { revenue: 0, profit: 0 };
  const resumoCompras = { total: 0, pendingCount: 0 };
  const resumoEstoque = { lowStockCount: 0, criticalStockCount: 0 };

  return (
    <LayoutPagina
      titulo={mensagens.paginas.painel.titulo}
      lateral={
        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
          {mensagens.paginas.painel.periodo}
        </Typography>
      }
    >
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1, padding: 2 }}>
        <Cartao
          titulo={mensagens.paginas.painel.totalVendido}
          conteudo={formatarMoeda(resumoVendas.revenue)}
          informacao={mensagens.paginas.painel.somaVendas}
        />
        <Cartao
          titulo={mensagens.comum.lucroEstimado}
          conteudo={formatarMoeda(resumoVendas.profit)}
          informacao={mensagens.paginas.painel.infoLucro}
        />
        <Cartao
          titulo={mensagens.paginas.painel.compras}
          conteudo={formatarMoeda(resumoCompras.total)}
          informacao={`${resumoCompras.pendingCount} ${mensagens.paginas.painel.comprasPendentes}`}
        />
        <Cartao
          titulo={mensagens.paginas.painel.estoqueBaixo}
          conteudo={resumoEstoque.lowStockCount.toLocaleString('pt-BR')}
          informacao={`${resumoEstoque.criticalStockCount} ${mensagens.paginas.painel.ingredientesCriticos}`}
        />
      </Stack>
      <Abas
        abas={[
          { rotulo: mensagens.abas.vendas, conteudo: <AbaVendas /> },
          { rotulo: mensagens.abas.compras, conteudo: <AbaCompras /> },
          { rotulo: mensagens.abas.paes, conteudo: <AbaPaes /> },
        ]}
      />
    </LayoutPagina>
  );
};

export default Painel;
