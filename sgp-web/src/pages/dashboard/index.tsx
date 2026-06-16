import Container from '@/components/ui/container';
import Tabs from '@/components/ui/tabs/tabs';
import PageLayout from '@/layouts/page';
import { Stack, Typography } from '@mui/material';
import BreadsTab from './breads';
import SalesTab from './sales';
import SimulationTab from './simulation';

const Dashboard = () => {
  return (
    <PageLayout title="Painel de Gerenciamento" aside={<Typography variant='caption' sx={{ fontWeight: 'bold' }} >Período análisado 01/01/2026 à 31/12/2026</Typography>}>
      <Stack direction="row" sx={{ gap: 1, padding: 2 }}>
        <Container sx={{ flex: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Total vendido
          </Typography>

          <Typography variant="h3" color="success">
            R$ 11.284,50
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Soma de vendas no período
          </Typography>
        </Container>
        <Container sx={{ flex: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Lucro estimado
          </Typography>

          <Typography variant="h3" color="success">
            R$ 6.342,50
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Preço de venda - custo da receita
          </Typography>
        </Container>
        <Container sx={{ flex: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Ingredientes em falta
          </Typography>

          <Typography variant="h3" color="error">
            2
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Abaixo do estoque minimo
          </Typography>
        </Container>
      </Stack>
      <Tabs
        tabs={[
          {
            label: 'Pães',
            content: <BreadsTab />,
          },
          {
            label: 'Compradores',
            content: <SalesTab />,
          },
          {
            label: 'Simular Produção',
            content: <SimulationTab />,
          },
        ]}
      />
    </PageLayout>
  );
};

export default Dashboard;
