import FormularioCategoriaIngrediente from '@/componentes/ingredientes/categorias/formulario';
import TabelaCategoria from '@/componentes/ingredientes/categorias/tabela';
import { ROTAS_API } from '@/constantes/rotas-api';
import { useObterPaginado } from '@/hooks/consulta';
import LayoutPagina from '@/layouts/pagina';
import { type CategoriaIngrediente } from '@/schemas/categoria-ingrediente';
import { coresPadaria } from '@/tema';
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';

const Categorias = () => {
  const [formAberto, setFormAberto] = useState<boolean>(false);

  const { dados: categorias } = useObterPaginado<CategoriaIngrediente>({
    endpoint: ROTAS_API.INGREDIENTE.CATEGORIA
  });

  return (
    <LayoutPagina
      titulo='Categorias de Ingrediente'
      lateral={
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            bgcolor: coresPadaria.barraLateral,
            color: coresPadaria.textoClaro,
            '&:hover': { bgcolor: coresPadaria.barraLateralSelecionadaHover },
          }}
          onClick={() => {
            setFormAberto(true);
          }} >Nova Categoria</Button>}
    >
      <FormularioCategoriaIngrediente
        aberto={formAberto}
        aoFechar={() => {
          setFormAberto(false);
        }}
      />
      <TabelaCategoria
        categorias={categorias}
      />
    </LayoutPagina>
  );
};

export default Categorias;
