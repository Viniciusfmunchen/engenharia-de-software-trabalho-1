import TabelaReceitas from '@/componentes/receitas/tabela';
import Cartao from '@/componentes/ui/cartao';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda, obterResumoVendas } from '@/mocks/operacoes-mock';
import { Stack } from '@mui/material';

const AbaPaes = () => {
  const resumo = obterResumoVendas();

  return (
    <Stack spacing={2}>
      <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
        <Stack sx={{ gap: 1, flex: 1, minWidth: 240 }}>
          <Cartao
            titulo={mensagens.pages.dashboard.totalSold}
            conteudo={resumo.quantity.toLocaleString('pt-BR')}
            informacao={mensagens.dashboardTabs.breads.unitsSold}
          />
          <Cartao
            titulo={mensagens.common.estimatedProfit}
            conteudo={formatarMoeda(resumo.profit)}
            informacao={mensagens.dashboardTabs.breads.profitPeriod}
          />
          <Cartao
            titulo={mensagens.dashboardTabs.breads.bestBread}
            conteudo={resumo.bestBread?.breadName ?? '-'}
            informacao={`${resumo.bestBread?.quantity.toLocaleString('pt-BR') ?? 0} ${mensagens.dashboardTabs.breads.units}`}
          />
          <Cartao
            titulo={mensagens.dashboardTabs.breads.lowestBread}
            conteudo={resumo.lowestBread?.breadName ?? '-'}
            informacao={`${resumo.lowestBread?.quantity.toLocaleString('pt-BR') ?? 0} ${mensagens.dashboardTabs.breads.units}`}
          />
          <Cartao
            titulo={mensagens.dashboardTabs.breads.mostProfitableBread}
            conteudo={resumo.mostProfitableBread?.breadName ?? '-'}
            informacao={formatarMoeda(resumo.mostProfitableBread?.estimatedProfit ?? 0)}
          />
        </Stack>
        <Stack sx={{ flex: 3, minWidth: 420 }}>
          <TabelaReceitas />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AbaPaes;
