import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import LayoutPagina from '@/layouts/pagina';
import { Typography } from '@mui/material';

const Relatorios = () => {
  return (
    <LayoutPagina titulo={mensagens.paginas.relatorios.titulo}>
      <Conteiner>
        <Typography variant="body2" color="text.secondary">
          {mensagens.paginas.relatorios.placeholder}
        </Typography>
      </Conteiner>
    </LayoutPagina>
  );
};

export default Relatorios;
