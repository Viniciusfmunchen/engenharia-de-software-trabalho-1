import Card from '@/components/ui/card';
import Container from '@/components/ui/container';
import { messages } from '@/constants/messages';
import PageLayout from '@/layouts/page';
import { formatCurrency, getPurchasesSummary, getSalesSummary, getStockSummary } from '@/mock/operationsMock';
import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const Welcome = () => {
  const navigate = useNavigate();
  const salesSummary = getSalesSummary();
  const purchasesSummary = getPurchasesSummary();
  const stockSummary = getStockSummary();

  return (
    <PageLayout title={messages.pages.welcome.title}>
      <Stack spacing={2}>
        <Container>
          <Stack spacing={1.5}>
            <Typography variant="h3">{messages.pages.welcome.subtitle}</Typography>
            <Typography variant="body1" color="text.secondary">
              {messages.pages.welcome.description}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 1 }}>
              <Button variant="contained" onClick={() => navigate('/dashboard')}>
                {messages.actions.goToDashboard}
              </Button>
              <Button variant="outlined" onClick={() => navigate('/bread-recipes')}>
                {messages.actions.viewRecipes}
              </Button>
            </Stack>
          </Stack>
        </Container>

        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
          <Card title={messages.nav.sales} content={formatCurrency(salesSummary.revenue)} info={messages.pages.welcome.registeredRevenue} />
          <Card title={messages.nav.purchases} content={formatCurrency(purchasesSummary.total)} info={messages.pages.welcome.totalPurchased} />
          <Card title={messages.pages.dashboard.lowStock} content={stockSummary.lowStockCount.toLocaleString('pt-BR')} info={messages.pages.welcome.ingredientsToRestock} />
        </Stack>
      </Stack>
    </PageLayout>
  );
};

export default Welcome;
