import LayoutPagina from '@/layouts/pagina';
import { mensagens } from '@/constantes/mensagens';
import { Typography } from '@mui/material';

const Categorias = () => {
  return (
    <LayoutPagina 
      titulo={mensagens.navegacao.categorias}
    >
      <Typography>Página de Categorias (Em construção)</Typography>
    </LayoutPagina>
  );
};

export default Categorias;
