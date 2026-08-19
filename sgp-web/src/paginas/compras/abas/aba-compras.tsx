import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import TabelaCompras from '@/componentes/compras/tabela';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/utils/formatar-moeda';
import type { LinhaCompra } from '@/schemas/compra';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Stack, TextField } from '@mui/material';
import { useMemo, useState } from 'react';

const AbaCompras = () => {
  const [busca, setBusca] = useState('');
  const compras: LinhaCompra[] = []; // Isso virá do useObterPaginado

  const resumo = useMemo(() => {
    const pendentes = compras.filter((compra) => compra.status === 'Pendente');

    return {
      total: compras.reduce((soma, compra) => soma + compra.custoTotal, 0),
      quantidade: compras.length,
      quantidadePendentes: pendentes.length,
      totalPendente: pendentes.reduce((soma, compra) => soma + compra.custoTotal, 0),
      totalFornecedores: new Set(compras.map((compra) => compra.nomeFornecedor)).size,
    };
  }, [compras]);

  const buscaNormalizada = busca.trim().toLocaleLowerCase('pt-BR');
  const comprasFiltradas = buscaNormalizada
    ? compras.filter((compra) =>
      `${compra.nomeFornecedor} ${compra.ingrediente.nomeIngrediente} ${compra.status}`
        .toLocaleLowerCase('pt-BR')
        .includes(buscaNormalizada),
    )
    : compras;

  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Cartao
          titulo={mensagens.paginas.compras.totalComprado}
          conteudo={formatarMoeda(resumo.total)}
          informacao={mensagens.paginas.compras.pedidosMock}
        />
        <Cartao
          titulo={mensagens.paginas.compras.pendentes}
          conteudo={resumo.quantidadePendentes.toLocaleString('pt-BR')}
          informacao={`${formatarMoeda(resumo.totalPendente)} ${mensagens.paginas.compras.aguardandoRecebimento}`}
        />
        <Cartao
          titulo={mensagens.paginas.compras.fornecedores}
          conteudo={resumo.totalFornecedores.toLocaleString('pt-BR')}
          informacao={`${resumo.quantidade} ${mensagens.paginas.compras.comprasRegistradas}`}
        />
      </Stack>

      <Conteiner>
        <TextField
          fullWidth
          size="small"
          label={mensagens.paginas.compras.pesquisar}
          placeholder={mensagens.paginas.compras.placeholderPesquisa}
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

      <TabelaCompras linhas={comprasFiltradas} />
    </Stack>
  );
};

export default AbaCompras;
