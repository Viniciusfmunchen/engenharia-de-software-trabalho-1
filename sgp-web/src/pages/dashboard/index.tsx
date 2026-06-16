import Card from '@/components/ui/card';
import Tabs from '@/components/ui/tabs/tabs';
import { messages } from '@/constants/messages';
import PageLayout from '@/layouts/page';
import { formatCurrency, getPurchasesSummary, getSalesSummary, getStockSummary } from '@/mock/operationsMock';
import { Stack, Typography } from '@mui/material';
import BreadsTab from './tabs/breads';
import PurchasesTab from './tabs/purchases';
import SalesTab from './tabs/sales';

const Dashboard = () => {
  const salesSummary = getSalesSummary();
  const purchasesSummary = getPurchasesSummary();
  const stockSummary = getStockSummary();

  return (
    <PageLayout
      title={messages.pages.dashboard.title}
      aside={
        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
          {messages.pages.dashboard.period}
        </Typography>
      }
    >
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1, padding: 2 }}>
        <Card title={messages.pages.dashboard.totalSold} content={formatCurrency(salesSummary.revenue)} info={messages.pages.dashboard.soldSum} />
        <Card
          title={messages.common.estimatedProfit}
          content={formatCurrency(salesSummary.profit)}
          info={messages.pages.dashboard.profitInfo}
        />
        <Card
          title={messages.pages.dashboard.purchases}
          content={formatCurrency(purchasesSummary.total)}
          info={`${purchasesSummary.pendingCount} ${messages.pages.dashboard.pendingPurchases}`}
        />
        <Card
          title={messages.pages.dashboard.lowStock}
          content={stockSummary.lowStockCount.toLocaleString('pt-BR')}
          info={`${stockSummary.criticalStockCount} ${messages.pages.dashboard.criticalIngredients}`}
        />
      </Stack>
      <Tabs
        tabs={[
          {
            label: messages.tabs.sales,
            content: <SalesTab />,
          },
          {
            label: messages.tabs.purchases,
            content: <PurchasesTab />,
          },
          {
            label: messages.tabs.breads,
            content: <BreadsTab />,
          },
        ]}
      />
    </PageLayout>
  );
};

export default Dashboard;
