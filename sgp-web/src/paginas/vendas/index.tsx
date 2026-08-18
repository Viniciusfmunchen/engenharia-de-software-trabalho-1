import FormularioVenda from '@/componentes/vendas/formulario';
import Abas from '@/componentes/ui/abas';
import { mensagens } from '@/constantes/mensagens';
import LayoutPagina from '@/layouts/pagina';
import type { CriarVenda } from '@/schemas/venda';
import { coresPadaria } from '@/tema';
import type { Receita } from '@/schemas/receita';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { useState } from 'react';
import AbaVendas from './abas/aba-vendas';
import AbaClientes from './abas/aba-clientes';

const Vendas = () => {
  const [receitas] = useState<Receita[]>([]); // Isso virá do useObterPaginado
  const [formularioVendaAberto, setFormularioVendaAberto] = useState(false);

  const manipularAdicionarVenda = (valores: CriarVenda) => {
    console.log(valores);
  };

  return (
    <LayoutPagina
      titulo={mensagens.paginas.vendas.titulo}
      lateral={
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: coresPadaria.barraLateral,
            color: coresPadaria.textoClaro,
            '&:hover': { bgcolor: coresPadaria.barraLateralSelecionadaHover },
          }}
          onClick={() => setFormularioVendaAberto(true)}
        >
          {mensagens.acoes.adicionarVenda}
        </Button>
      }
    >
      <Abas
        abas={[
          { rotulo: mensagens.abas.vendas, conteudo: <AbaVendas /> },
          { rotulo: mensagens.abas.clientes, conteudo: <AbaClientes /> },
        ]}
      />

      <FormularioVenda
        aberto={formularioVendaAberto}
        receitas={receitas}
        clientes={[]} 
        aoFechar={() => setFormularioVendaAberto(false)}
        aoSubmeter={manipularAdicionarVenda}
      />
    </LayoutPagina>
  );
};

export default Vendas;
