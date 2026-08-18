import TabelaReceitas from '@/componentes/receitas/tabela';
import Cartao from '@/componentes/ui/cartao';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/utils/formatar-moeda';
import { Stack } from '@mui/material';

const AbaPaes = () => {
  const resumo = {
    quantity: 0,
    profit: 0,
    bestBread: null as any,
    lowestBread: null as any,
    mostProfitableBread: null as any,
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
        <Stack sx={{ gap: 1, flex: 1, minWidth: 240 }}>
          <Cartao
            titulo={mensagens.paginas.painel.totalVendido}
            conteudo={resumo.quantity.toLocaleString('pt-BR')}
            informacao={mensagens.abasPainel.paes.unidadesVendidas}
          />
          <Cartao
            titulo={mensagens.comum.lucroEstimado}
            conteudo={formatarMoeda(resumo.profit)}
            informacao={mensagens.abasPainel.paes.lucroPeriodo}
          />
          <Cartao
            titulo={mensagens.abasPainel.paes.melhorPao}
            conteudo={resumo.bestBread?.breadName ?? '-'}
            informacao={`${resumo.bestBread?.quantity.toLocaleString('pt-BR') ?? 0} ${mensagens.abasPainel.paes.unidades}`}
          />
          <Cartao
            titulo={mensagens.abasPainel.paes.piorPao}
            conteudo={resumo.lowestBread?.breadName ?? '-'}
            informacao={`${resumo.lowestBread?.quantity.toLocaleString('pt-BR') ?? 0} ${mensagens.abasPainel.paes.unidades}`}
          />
          <Cartao
            titulo={mensagens.abasPainel.paes.paoMaisLucrativo}
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
