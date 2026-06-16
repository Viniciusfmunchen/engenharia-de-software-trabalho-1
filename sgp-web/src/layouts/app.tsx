import Sidebar from '@/components/menus/sidebar';
import { COLLAPSED_SIDEBAR_WIDTH, SIDEBAR_WIDTH } from '@/constants/ui';
import { useSidebar } from '@/contexts/sidebar';
import { Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router';

const AppLayout = () => {
  const { collapsed } = useSidebar()
  const sidebarWidth = collapsed ? COLLAPSED_SIDEBAR_WIDTH : SIDEBAR_WIDTH;

  return (
    <Stack sx={{ height: '100vh', p: 0 }} direction="row">
      <Sidebar />
      <Stack sx={{
        minHeight: '100vh',
        ml: `${sidebarWidth}px`,
        width: `calc(100% - ${sidebarWidth}px)`,
        p: 3,
        bgcolor: '#faf7f2',
        overflow: 'auto',
        transition: (theme) =>
          theme.transitions.create(['margin-left', 'width'], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
      }} >
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
