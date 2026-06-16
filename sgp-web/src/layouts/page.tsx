import { Stack, Typography } from '@mui/material';
import type { PropsWithChildren } from 'react';

interface PageLayoutProps extends PropsWithChildren {
  title: string;
  aside: React.ReactNode;
}

const PageLayout = ({ title, aside, children }: PageLayoutProps) => {
  return (
    <Stack sx={{ gap: 2, paddingBottom: 4 }}>
      <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Typography variant="h1">{title}</Typography>
        {aside}
      </Stack>
      {children}
    </Stack>
  );
};

export default PageLayout;
