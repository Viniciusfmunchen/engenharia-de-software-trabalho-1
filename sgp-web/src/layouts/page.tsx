import { Stack, Typography } from '@mui/material';
import type { PropsWithChildren } from 'react';

interface PageLayoutProps extends PropsWithChildren {
  title: string;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <Stack sx={{ gap: 2 }}>
      <Typography variant="h1">{title}</Typography>
      {children}
    </Stack>
  );
};

export default PageLayout;
