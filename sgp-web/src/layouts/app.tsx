import Sidebar from '@/components/menus/sidebar';
import { Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router';

const AppLayout = () => {
  return (
    <Stack sx={{ height: '100vh', p: 0 }} direction="row">
      <Sidebar />
      <Stack sx={{ background: '#faf7f2', width: '100%', padding: 4 }}>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 'bold',
            color: '#d6a15d',
            textTransform: 'uppercase',
            paddingBottom: 1,
          }}
        >
          Sistema de Gerenciamento de padarias
        </Typography>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default AppLayout;
