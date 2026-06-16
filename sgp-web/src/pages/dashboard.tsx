import Container from '@/components/ui/container';
import Tabs from '@/components/ui/tabs/tabs';
import PageLayout from '@/layouts/page';
import { Stack, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <PageLayout title="Painel de Gerenciamento">
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
            Pão mais vendido
          </Typography>

          <Typography variant="h3">Pão Francês</Typography>

          <Typography variant="caption" color="text.secondary">
            5.100 unidades
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
            label: 'Resumo',
            content: <div>Conteúdo do resumo</div>,
          },
          {
            label: 'Ingredientes',
            content: <div>Conteúdo de ingredientes</div>,
          },
          {
            label: 'Vendas',
            content: <div>Conteúdo de vendas</div>,
          },
        ]}
      />
    </PageLayout>
  );
};

export default Dashboard;
