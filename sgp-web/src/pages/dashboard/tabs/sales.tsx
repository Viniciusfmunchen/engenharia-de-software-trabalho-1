import SalesTable from '@/components/sales/table';
import Card from '@/components/ui/card';
import Container from '@/components/ui/container';
import { messages } from '@/constants/messages';
import {
  formatCurrency,
  getCustomerSalesRows,
  getSaleRevenue,
  getSalesSummary,
  salesMock,
} from '@/mock/operationsMock';
import type { PaymentMethod } from '@/types/bakery';
import { Chip, Stack, Typography } from '@mui/material';

interface PaymentRow {
  method: PaymentMethod;
  orders: number;
  revenue: number;
}

const getPaymentRows = () =>
  salesMock.reduce<PaymentRow[]>((rows, sale) => {
    const current = rows.find((row) => row.method === sale.paymentMethod);

    if (current) {
      current.orders += 1;
      current.revenue += getSaleRevenue(sale);
      return rows;
    }

    rows.push({
      method: sale.paymentMethod,
      orders: 1,
      revenue: getSaleRevenue(sale),
    });

    return rows;
  }, []);

const SalesTab = () => {
  const summary = getSalesSummary();
  const customerRows = getCustomerSalesRows();
  const bestBuyer = customerRows[0];
  const paymentRows = getPaymentRows().sort((a, b) => b.orders - a.orders);
  const preferredPayment = paymentRows[0];

  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Card
          title={messages.common.revenue}
          content={formatCurrency(summary.revenue)}
          info={messages.pages.sales.saleSum}
        />
        <Card
          title={messages.dashboardTabs.sales.bestBuyer}
          content={bestBuyer?.buyerName ?? '-'}
          info={bestBuyer ? formatCurrency(bestBuyer.revenue) : '-'}
        />
        <Card
          title={messages.dashboardTabs.sales.buyerCount}
          content={customerRows.length.toLocaleString('pt-BR')}
          info={`${summary.orders} ${messages.pages.sales.registeredSales}`}
        />
        <Card
          title={messages.dashboardTabs.sales.preferredPayment}
          content={preferredPayment?.method ?? '-'}
          info={
            preferredPayment
              ? `${preferredPayment.orders} ${messages.dashboardTabs.sales.ordersSuffix}`
              : '-'
          }
        />
      </Stack>

      <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ gap: 2, alignItems: 'flex-start' }}>
        <Container
          title={messages.dashboardTabs.sales.paymentDistribution}
          subtitle={messages.dashboardTabs.overview.registeredRevenue}
          sx={{ width: { xs: '100%', lg: 320 }, flexShrink: 0 }}
        >
          <Stack spacing={1}>
            {paymentRows.map((row) => (
              <Stack
                key={row.method}
                direction="row"
                sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 1 }}
              >
                <Stack>
                  <Typography variant="body1">{row.method}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {row.orders} {messages.dashboardTabs.sales.ordersSuffix}
                  </Typography>
                </Stack>
                <Chip size="small" label={formatCurrency(row.revenue)} />
              </Stack>
            ))}
          </Stack>
        </Container>

        <Stack sx={{ flex: 1, minWidth: 0, width: '100%' }}>
          <SalesTable />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SalesTab;
