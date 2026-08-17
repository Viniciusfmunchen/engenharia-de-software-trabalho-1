import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { roteador } from './roteador';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { tema } from './tema';
import { ProvedorBarraLateral } from './contextos/barra-lateral';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1 },
    mutations: { retry: 0 },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={tema}>
        <CssBaseline />
        <ProvedorBarraLateral>
          <RouterProvider router={roteador} />
        </ProvedorBarraLateral>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
