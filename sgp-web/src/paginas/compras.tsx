import ModalFormularioCompra from '@/componentes/compras/modal-formulario-compra';
import ModalFormularioFornecedor from '@/componentes/fornecedores/modal-formulario-fornecedor';
import TabelaCompras from '@/componentes/compras/tabela';
import TabelaFornecedores from '@/componentes/fornecedores/tabela';
import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import Abas from '@/componentes/ui/abas/abas';
import { mensagens } from '@/constantes/mensagens';
import LayoutPagina from '@/layouts/pagina';
import { ingredientesPaes } from '@/mocks/receitas-paes-mock';
import { obterFornecedores, salvarFornecedores } from '@/mocks/entidades-mock';
import {
  comprasMock,
  formatarMoeda,
  obterLinhasCompras,
} from '@/mocks/operacoes-mock';
import type { FormularioCompraValores } from '@/schemas/compra';
import type { FormularioFornecedorValores } from '@/schemas/fornecedor';
import { coresPadaria } from '@/tema';
import type { Compra } from '@/tipos/compra';
import type { Fornecedor } from '@/tipos/fornecedor';
import { obterProximoId } from '@/utils/identificadores';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useMemo, useState } from 'react';

const Compras = () => {
  const [busca, setBusca] = useState('');
  const [compras, setCompras] = useState(() => obterLinhasCompras());
  const [fornecedores, setFornecedores] = useState(() => obterFornecedores());
  const [formularioCompraAberto, setFormularioCompraAberto] = useState(false);
  const [formularioFornecedorAberto, setFormularioFornecedorAberto] = useState(false);

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

  const manipularAdicionarCompra = (valores: FormularioCompraValores) => {
    const novaCompra: Compra = {
      idCompra: obterProximoId(comprasMock, 'idCompra'),
      data: valores.data,
      nomeFornecedor: valores.nomeFornecedor,
      idIngrediente: valores.idIngrediente,
      quantidade: valores.quantidade,
      custoUnitario: valores.custoUnitario,
      status: valores.status,
    };

    comprasMock.push(novaCompra);
    setCompras(obterLinhasCompras());
  };

  const manipularAdicionarFornecedor = (valores: FormularioFornecedorValores) => {
    const novoFornecedor: Fornecedor = {
      idFornecedor: obterProximoId(fornecedores, 'idFornecedor'),
      nome: valores.nome,
      documento: valores.documento,
      telefone: valores.telefone,
      nomeContato: valores.nomeContato,
    };
    const proximosFornecedores = [...fornecedores, novoFornecedor];

    salvarFornecedores(proximosFornecedores);
    setFornecedores(proximosFornecedores);
  };

  const conteudoCompras = (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Cartao
          titulo={mensagens.pages.purchases.totalPurchased}
          conteudo={formatarMoeda(resumo.total)}
          informacao={mensagens.pages.purchases.mockOrders}
        />
        <Cartao
          titulo={mensagens.pages.purchases.pending}
          conteudo={resumo.quantidadePendentes.toLocaleString('pt-BR')}
          informacao={`${formatarMoeda(resumo.totalPendente)} ${mensagens.pages.purchases.awaitingReceipt}`}
        />
        <Cartao
          titulo={mensagens.pages.purchases.suppliers}
          conteudo={resumo.totalFornecedores.toLocaleString('pt-BR')}
          informacao={`${resumo.quantidade} ${mensagens.pages.purchases.registeredPurchases}`}
        />
      </Stack>

      <Conteiner>
        <TextField
          fullWidth
          size="small"
          label={mensagens.pages.purchases.searchLabel}
          placeholder={mensagens.pages.purchases.searchPlaceholder}
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

  const conteudoFornecedores = (
    <Conteiner
      titulo={mensagens.common.suppliers}
      acao={
        <Button
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          sx={{
            bgcolor: coresPadaria.barraLateral,
            color: coresPadaria.textoClaro,
            '&:hover': { bgcolor: coresPadaria.barraLateralSelecionadaHover },
          }}
          onClick={() => setFormularioFornecedorAberto(true)}
        >
          {mensagens.actions.addSupplier}
        </Button>
      }
      semEspacamento
    >
      <TabelaFornecedores linhas={fornecedores} />
    </Conteiner>
  );

  return (
    <LayoutPagina
      titulo={mensagens.pages.purchases.title}
      aside={
        <Button
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          sx={{
            bgcolor: coresPadaria.barraLateral,
            color: coresPadaria.textoClaro,
            '&:hover': { bgcolor: coresPadaria.barraLateralSelecionadaHover },
          }}
          onClick={() => setFormularioCompraAberto(true)}
        >
          {mensagens.actions.addPurchase}
        </Button>
      }
    >
      <>
        <Abas
          tabs={[
            { label: mensagens.tabs.purchases, content: conteudoCompras },
            { label: mensagens.tabs.suppliers, content: conteudoFornecedores },
          ]}
        />

        <ModalFormularioCompra
          aberto={formularioCompraAberto}
          ingredientes={ingredientesPaes}
          fornecedores={fornecedores}
          aoFechar={() => setFormularioCompraAberto(false)}
          aoSubmeter={manipularAdicionarCompra}
        />

        <ModalFormularioFornecedor
          aberto={formularioFornecedorAberto}
          aoFechar={() => setFormularioFornecedorAberto(false)}
          aoSubmeter={manipularAdicionarFornecedor}
        />
      </>
    </LayoutPagina>
  );
};

export default Compras;
