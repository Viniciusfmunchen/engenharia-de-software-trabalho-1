import FormularioCompra from '@/componentes/compras/formulario';
import Abas from '@/componentes/ui/abas';
import { mensagens } from '@/constantes/mensagens';
import LayoutPagina from '@/layouts/pagina';
import type { CriarCompra } from '@/schemas/compra';
import { coresPadaria } from '@/tema';
import type { Fornecedor } from '@/schemas/fornecedor';
import type { Ingrediente } from '@/schemas/ingrediente';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
import { useState } from 'react';
import AbaCompras from './abas/aba-compras';
import AbaFornecedores from './abas/aba-fornecedores';

const Compras = () => {
  const [fornecedores] = useState<Fornecedor[]>([]); // Isso virá do useObterPaginado
  const [ingredientes] = useState<Ingrediente[]>([]); // Isso virá do useObterPaginado
  const [formularioCompraAberto, setFormularioCompraAberto] = useState(false);

  const manipularAdicionarCompra = (valores: CriarCompra) => {
    console.log(valores);
    // TODO: Usar mutation para salvar no backend
  };

  return (
    <LayoutPagina
      titulo={mensagens.paginas.compras.titulo}
      lateral={
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
          {mensagens.acoes.adicionarCompra}
        </Button>
      }
    >
      <>
        <Abas
          abas={[
            { rotulo: mensagens.abas.compras, conteudo: <AbaCompras /> },
            { rotulo: mensagens.abas.fornecedores, conteudo: <AbaFornecedores /> },
          ]}
        />

        <FormularioCompra
          aberto={formularioCompraAberto}
          ingredientes={ingredientes}
          fornecedores={fornecedores}
          aoFechar={() => setFormularioCompraAberto(false)}
          aoSubmeter={manipularAdicionarCompra}
        />
      </>
    </LayoutPagina>
  );
};

export default Compras;
