import TabelaCompras from '@/componentes/compras/tabela';
import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/utils/formatar-moeda';
import type { LinhaCompra } from '@/schemas/compra';
import { Chip, Stack, Typography } from '@mui/material';

interface LinhaGasto {
  rotulo: string;
  total: number;
  quantidade: number;
}



const obterRotuloContagemCompra = (quantidade: number) =>
  quantidade === 1
    ? '1 compra registrada'
    : `${quantidade} ${mensagens.paginas.compras.comprasRegistradas}`;

const AbaCompras = () => {
  const compras: LinhaCompra[] = [];
  const resumo = { total: 0, pendingTotal: 0 };
  const linhasFornecedores: LinhaGasto[] = [];
  const linhasCategorias: LinhaGasto[] = [];

  const principalFornecedor = linhasFornecedores[0] as LinhaGasto | undefined;
  const principalCategoria = linhasCategorias[0] as LinhaGasto | undefined;

  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Cartao
          titulo={mensagens.abasPainel.compras.totalGasto}
          conteudo={formatarMoeda(resumo.total)}
          informacao={mensagens.abasPainel.compras.infoGastos}
        />
        <Cartao
          titulo={mensagens.abasPainel.compras.totalPendente}
          conteudo={formatarMoeda(resumo.pendingTotal)}
          informacao={mensagens.abasPainel.compras.infoPendente}
        />
        <Cartao
          titulo={mensagens.abasPainel.compras.fornecedorPrincipal}
          conteudo={principalFornecedor?.rotulo ?? '-'}
          informacao={principalFornecedor ? formatarMoeda(principalFornecedor.total) : '-'}
        />
        <Cartao
          titulo={mensagens.abasPainel.compras.categoriaMaisComprada}
          conteudo={principalCategoria?.rotulo ?? '-'}
          informacao={principalCategoria ? formatarMoeda(principalCategoria.total) : '-'}
        />
      </Stack>

      <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ gap: 2, alignItems: 'flex-start' }}>
        <Stack sx={{ width: { xs: '100%', lg: 320 }, gap: 2, flexShrink: 0 }}>
          <Conteiner titulo={mensagens.abasPainel.compras.gastosPorFornecedor}>
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

          <Conteiner titulo={mensagens.abasPainel.compras.gastosPorCategoria}>
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
