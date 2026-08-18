import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  IconButton,
  Modal as MuiModal,
  Stack,
  Typography,
  type SxProps,
  type Theme,
} from '@mui/material';
import { useId, type ReactNode } from 'react';

const larguraModal = {
  sm: 420,
  md: 640,
  lg: 840,
};

interface PropriedadesModalApp {
  aberto?: boolean;
  aoFechar?: () => void;
  titulo?: string;
  children: ReactNode;
  larguraMaxima?: keyof typeof larguraModal;
  sx?: SxProps<Theme>;
}

const ModalApp = ({
  aberto = false,
  aoFechar,
  titulo,
  children,
  larguraMaxima = 'md',
  sx,
}: PropriedadesModalApp) => {
  const idTitulo = useId();
  const estaAberto = aberto;
  const fechar = aoFechar;
  const textoTitulo = titulo;
  return (
    <MuiModal open={estaAberto} onClose={fechar} aria-labelledby={idTitulo}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: `min(calc(100vw - 32px), ${larguraModal[larguraMaxima]}px)`,
          maxHeight: 'calc(100vh - 32px)',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: '#eadfce',
          borderRadius: 2,
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          ...sx,
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            px: 2,
            py: 1.5,
            borderBottom: '1px solid #f1e7d8',
          }}
        >
          <Typography id={idTitulo} variant="h6">
            {textoTitulo}
          </Typography>

          <IconButton size="small" onClick={fechar} aria-label="Fechar">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Box sx={{ p: 2, overflowY: 'auto' }}>{children}</Box>
      </Box>
    </MuiModal>
  );
};

export default ModalApp;
