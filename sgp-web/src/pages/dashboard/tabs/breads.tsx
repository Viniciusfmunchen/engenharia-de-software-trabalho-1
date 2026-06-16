import RecipeTable from '@/components/bread-recipe/table';
import Card from '@/components/ui/card';
import { messages } from '@/constants/messages';
import { formatCurrency, getSalesSummary } from '@/mock/operationsMock';
import { Stack } from '@mui/material';

const BreadsTab = () => {
  const summary = getSalesSummary();

  return (
    <Stack spacing={2}>
      <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
        <Stack sx={{ gap: 1, flex: 1, minWidth: 240 }}>
          <Card
            title={messages.pages.dashboard.totalSold}
            content={summary.quantity.toLocaleString('pt-BR')}
            info={messages.dashboardTabs.breads.unitsSold}
          />
          <Card
            title={messages.common.estimatedProfit}
            content={formatCurrency(summary.profit)}
            info={messages.dashboardTabs.breads.profitPeriod}
          />
          <Card
            title={messages.dashboardTabs.breads.bestBread}
            content={summary.bestBread?.breadName ?? '-'}
            info={`${summary.bestBread?.quantity.toLocaleString('pt-BR') ?? 0} ${messages.dashboardTabs.breads.units}`}
          />
          <Card
            title={messages.dashboardTabs.breads.lowestBread}
            content={summary.lowestBread?.breadName ?? '-'}
            info={`${summary.lowestBread?.quantity.toLocaleString('pt-BR') ?? 0} ${messages.dashboardTabs.breads.units}`}
          />
          <Card
            title={messages.dashboardTabs.breads.mostProfitableBread}
            content={summary.mostProfitableBread?.breadName ?? '-'}
            info={formatCurrency(summary.mostProfitableBread?.estimatedProfit ?? 0)}
          />
        </Stack>
        <Stack sx={{ flex: 3, minWidth: 420 }}>
          <RecipeTable />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BreadsTab;
