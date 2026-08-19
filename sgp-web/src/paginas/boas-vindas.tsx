import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import LayoutPagina from '@/layouts/pagina';
import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const BoasVindas = () => {
  const navegar = useNavigate();

  return (
    <LayoutPagina titulo={mensagens.paginas.boasVindas.titulo}>
      <Stack spacing={2}>
        <Conteiner>
          <Stack spacing={1.5}>
            <Typography variant="h3">{mensagens.paginas.boasVindas.subtitulo}</Typography>
            <Typography variant="body1" color="text.secondary">
              {mensagens.paginas.boasVindas.descricao}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 1 }}>
              <Button variant="contained" onClick={() => navegar('/painel')}>
                {mensagens.acoes.irParaPainel}
              </Button>
              <Button variant="outlined" onClick={() => navegar('/receitas')}>
                {mensagens.acoes.verReceitas}
              </Button>
            </Stack>
          </Stack>
        </Conteiner>
      </Stack>
    </LayoutPagina>
  );
};

export default BoasVindas;
