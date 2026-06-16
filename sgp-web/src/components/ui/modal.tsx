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

const modalWidth = {
  sm: 420,
  md: 640,
  lg: 840,
};

interface AppModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  maxWidth?: keyof typeof modalWidth;
  sx?: SxProps<Theme>;
}

const AppModal = ({ open, title, children, onClose, maxWidth = 'md', sx }: AppModalProps) => {
  const titleId = useId();

  return (
    <MuiModal open={open} onClose={onClose} aria-labelledby={titleId}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: `min(calc(100vw - 32px), ${modalWidth[maxWidth]}px)`,
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
          <Typography id={titleId} variant="h6">
            {title}
          </Typography>

          <IconButton size="small" onClick={onClose} aria-label="Fechar">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Box sx={{ p: 2, overflowY: 'auto' }}>{children}</Box>
      </Box>
    </MuiModal>
  );
};

export default AppModal;
