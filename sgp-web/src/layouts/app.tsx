import Sidebar from '@/components/menus/sidebar';
import { messages } from '@/constants/messages';
import { COLLAPSED_SIDEBAR_WIDTH, SIDEBAR_WIDTH } from '@/constants/ui';
import { useSidebar } from '@/contexts/sidebar';
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router';

const AppLayout = () => {
  const { collapsed } = useSidebar();
  const theme = useTheme();
  const isCompact = useMediaQuery(theme.breakpoints.down('sm'));
  const sidebarWidth = collapsed || isCompact ? COLLAPSED_SIDEBAR_WIDTH : SIDEBAR_WIDTH;

  return (
    <Stack sx={{ height: '100vh', p: 0 }} direction="row">
      <Sidebar />
      <Stack
        sx={{
          minHeight: '100vh',
          ml: `${sidebarWidth}px`,
          width: `calc(100% - ${sidebarWidth}px)`,
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
          {messages.app.eyebrow}
        </Typography>
        <Outlet />
        {/* <Chat /> */}
      </Stack>
    </Stack>
  );
};

export default AppLayout;
