import TabelaVendas from '@/componentes/vendas/tabela';
import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/utils/formatar-moeda';
import type { LinhaPagamento, LinhaVendasCliente } from '@/schemas/venda';
import { Chip, Stack, Typography } from '@mui/material';

const AbaVendas = () => {
  const resumo = { revenue: 0, orders: 0 };
  const linhasClientes: LinhaVendasCliente[] = [];
  const melhorComprador = linhasClientes[0] as LinhaVendasCliente | undefined;
  const linhasPagamento: LinhaPagamento[] = [];
  const pagamentoPreferido = linhasPagamento[0] as LinhaPagamento | undefined;

  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Cartao
          titulo={mensagens.comum.faturamento}
          conteudo={formatarMoeda(resumo.revenue)}
          informacao={mensagens.paginas.vendas.somaVendas}
        />
        <Cartao
          titulo={mensagens.abasPainel.vendas.melhorComprador}
          conteudo={melhorComprador?.nomeComprador ?? '-'}
          informacao={melhorComprador ? formatarMoeda(melhorComprador.faturamento) : '-'}
        />
        <Cartao
          titulo={mensagens.abasPainel.vendas.compradoresAtivos}
          conteudo={linhasClientes.length.toLocaleString('pt-BR')}
          informacao={`${resumo.orders} ${mensagens.paginas.vendas.vendasRegistradas}`}
        />
        <Cartao
          titulo={mensagens.abasPainel.vendas.pagamentoPreferido}
          conteudo={pagamentoPreferido?.formaPagamento ?? '-'}
          informacao={
            pagamentoPreferido
              ? `${pagamentoPreferido.pedidos} ${mensagens.abasPainel.vendas.sufixoPedidos}`
              : '-'
          }
        />
      </Stack>

      <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ gap: 2, alignItems: 'flex-start' }}>
        <Conteiner
          titulo={mensagens.abasPainel.vendas.distribuicaoPagamento}
          subtitulo={mensagens.abasPainel.visaoGeral.faturamentoRegistrado}
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
                    {linha.pedidos} {mensagens.abasPainel.vendas.sufixoPedidos}
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
