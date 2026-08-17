import { Stack, Typography } from '@mui/material';
import type { PropsWithChildren, ReactNode } from 'react';

interface PropriedadesLayoutPagina extends PropsWithChildren {
  titulo: string;
  aside?: ReactNode;
  lateral?: ReactNode;
}

const LayoutPagina = ({ titulo, aside, lateral, children }: PropriedadesLayoutPagina) => {
  const elementoLateral = aside ?? lateral;

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
