import { Stack, Typography } from '@mui/material';
import type { PropsWithChildren, ReactNode } from 'react';

interface PropriedadesLayoutPagina extends PropsWithChildren {
  titulo: string;
  lateral?: ReactNode;
}

const LayoutPagina = ({ titulo, lateral, children }: PropriedadesLayoutPagina) => {
  const elementoLateral = lateral;

  return (
    <Stack sx={{ gap: 2, paddingBottom: 4 }}>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Typography variant="h1">{titulo}</Typography>
        {elementoLateral}
      </Stack>
      {children}
    </Stack>
  );
};

export default LayoutPagina;
