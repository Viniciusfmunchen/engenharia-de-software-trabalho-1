import { Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface PropriedadesResumo {
  icone?: ReactNode;
  rotulo?: string;
  valor?: string;
  icon?: ReactNode;
  label?: string;
  value?: string;
}

const Resumo = ({ icone, rotulo, valor, icon, label, value }: PropriedadesResumo) => (
  <Stack
    direction="row"
    sx={{
      alignItems: 'center',
      gap: 1,
      minWidth: 150,
      color: 'text.secondary',
    }}
  >
    {icone ?? icon}
    <Stack>
      <Typography variant="caption">{rotulo ?? label}</Typography>
      <Typography variant="subtitle2" color="text.primary">
        {valor ?? value}
      </Typography>
    </Stack>
  </Stack>
);

export default Resumo;
