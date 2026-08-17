import BarraLateral from '@/componentes/menus/barra-lateral';
import { mensagens } from '@/constantes/mensagens';
import {
  LARGURA_BARRA_LATERAL,
  LARGURA_BARRA_LATERAL_RECOLHIDA,
} from '@/constantes/interface';
import { useBarraLateral } from '@/contextos/barra-lateral';
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router';

const LayoutAplicacao = () => {
  const { recolhida } = useBarraLateral();
  const tema = useTheme();
  const ehCompacto = useMediaQuery(tema.breakpoints.down('sm'));
  const larguraBarraLateral =
    recolhida || ehCompacto ? LARGURA_BARRA_LATERAL_RECOLHIDA : LARGURA_BARRA_LATERAL;

  return (
    <Stack sx={{ height: '100vh', p: 0 }} direction="row">
      <BarraLateral />
      <Stack
        sx={{
          minHeight: '100vh',
          ml: `${larguraBarraLateral}px`,
          width: `calc(100% - ${larguraBarraLateral}px)`,
          p: { xs: 2, sm: 3 },
          bgcolor: '#faf7f2',
          overflow: 'auto',
          transition: (theme) =>
            theme.transitions.create(['margin-left', 'width'], {
              duration: theme.transitions.duration.standard,
              easing: theme.transitions.easing.easeInOut,
            }),
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 'bold',
            color: '#d6a15d',
            textTransform: 'uppercase',
            paddingBottom: 1,
          }}
        >
          {mensagens.app.eyebrow}
        </Typography>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default LayoutAplicacao;
