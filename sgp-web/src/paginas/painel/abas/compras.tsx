import TabelaCompras from '@/componentes/compras/tabela';
import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import {
  formatarMoeda,
  obterLinhasCompras,
  obterResumoCompras,
} from '@/mocks/operacoes-mock';
import type { LinhaCompra } from '@/tipos/compra';
import { Chip, Stack, Typography } from '@mui/material';

interface LinhaGasto {
  rotulo: string;
  total: number;
  quantidade: number;
}

const rotulosCategorias: Record<string, string> = {
  farinha: 'Farinha',
  fermento: 'Fermento',
  gordura: 'Gordura',
  liquido: 'Líquidos',
  recheio: 'Recheios',
};

const obterRotuloContagemCompra = (quantidade: number) =>
  quantidade === 1
    ? '1 compra registrada'
    : `${quantidade} ${mensagens.pages.purchases.registeredPurchases}`;

const construirLinhasGastos = (
  compras: LinhaCompra[],
  obterRotulo: (compra: LinhaCompra) => string,
) =>
  compras.reduce<LinhaGasto[]>((linhas, compra) => {
    const rotulo = obterRotulo(compra);
    const atual = linhas.find((linha) => linha.rotulo === rotulo);

    if (atual) {
      atual.total += compra.custoTotal;
      atual.quantidade += 1;
      return linhas;
    }

    linhas.push({
      rotulo,
      total: compra.custoTotal,
      quantidade: 1,
    });

    return linhas;
  }, []);

const AbaCompras = () => {
  const compras = obterLinhasCompras();
  const resumo = obterResumoCompras();
  const linhasFornecedores = construirLinhasGastos(
    compras,
    (compra) => compra.nomeFornecedor,
  ).sort((a, b) => b.total - a.total);
  const linhasCategorias = construirLinhasGastos(
    compras,
    (compra) =>
      rotulosCategorias[compra.ingrediente.categoriaIngrediente.nomeCategoria.toLowerCase()] ??
      compra.ingrediente.categoriaIngrediente.nomeCategoria,
  ).sort((a, b) => b.total - a.total);

  const principalFornecedor = linhasFornecedores[0];
  const principalCategoria = linhasCategorias[0];

  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Cartao
          titulo={mensagens.dashboardTabs.purchases.totalSpent}
          conteudo={formatarMoeda(resumo.total)}
          informacao={mensagens.dashboardTabs.purchases.spendingInfo}
        />
        <Cartao
          titulo={mensagens.dashboardTabs.purchases.pendingTotal}
          conteudo={formatarMoeda(resumo.pendingTotal)}
          informacao={mensagens.dashboardTabs.purchases.pendingInfo}
        />
        <Cartao
          titulo={mensagens.dashboardTabs.purchases.mainSupplier}
          conteudo={principalFornecedor?.rotulo ?? '-'}
          informacao={principalFornecedor ? formatarMoeda(principalFornecedor.total) : '-'}
        />
        <Cartao
          titulo={mensagens.dashboardTabs.purchases.mostPurchasedCategory}
          conteudo={principalCategoria?.rotulo ?? '-'}
          informacao={principalCategoria ? formatarMoeda(principalCategoria.total) : '-'}
        />
      </Stack>

      <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ gap: 2, alignItems: 'flex-start' }}>
        <Stack sx={{ width: { xs: '100%', lg: 320 }, gap: 2, flexShrink: 0 }}>
          <Conteiner titulo={mensagens.dashboardTabs.purchases.supplierSpending}>
            <Stack spacing={1}>
              {linhasFornecedores.slice(0, 5).map((linha) => (
                <Stack
                  key={linha.rotulo}
                  direction="row"
                  sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 1 }}
                >
                  <Stack>
                    <Typography variant="body1">{linha.rotulo}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {obterRotuloContagemCompra(linha.quantidade)}
                    </Typography>
                  </Stack>
                  <Chip size="small" label={formatarMoeda(linha.total)} />
                </Stack>
              ))}
            </Stack>
          </Conteiner>

          <Conteiner titulo={mensagens.dashboardTabs.purchases.categorySpending}>
            <Stack spacing={1}>
              {linhasCategorias.slice(0, 5).map((linha) => (
                <Stack
                  key={linha.rotulo}
                  direction="row"
                  sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 1 }}
                >
                  <Typography variant="body1">{linha.rotulo}</Typography>
                  <Chip size="small" label={formatarMoeda(linha.total)} />
                </Stack>
              ))}
            </Stack>
          </Conteiner>
        </Stack>

        <Stack sx={{ flex: 1, minWidth: 0, width: '100%' }}>
          <TabelaCompras linhas={compras} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AbaCompras;
