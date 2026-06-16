import PurchasesTable from '@/components/purchases/table';
import Card from '@/components/ui/card';
import Container from '@/components/ui/container';
import { messages } from '@/constants/messages';
import { formatCurrency, getPurchaseRows, getPurchasesSummary } from '@/mock/operationsMock';
import type { PurchaseRow } from '@/types/bakery';
import { Chip, Stack, Typography } from '@mui/material';

interface SpendingRow {
  label: string;
  total: number;
  count: number;
}

const categoryLabels: Record<string, string> = {
  farinha: 'Farinha',
  fermento: 'Fermento',
  gordura: 'Gordura',
  liquido: 'Líquidos',
  recheio: 'Recheios',
};

const getPurchaseCountLabel = (count: number) =>
  count === 1 ? '1 compra registrada' : `${count} ${messages.pages.purchases.registeredPurchases}`;

const buildSpendingRows = (purchases: PurchaseRow[], getLabel: (purchase: PurchaseRow) => string) =>
  purchases.reduce<SpendingRow[]>((rows, purchase) => {
    const label = getLabel(purchase);
    const current = rows.find((row) => row.label === label);

    if (current) {
      current.total += purchase.totalCost;
      current.count += 1;
      return rows;
    }

    rows.push({
      label,
      total: purchase.totalCost,
      count: 1,
    });

    return rows;
  }, []);

const PurchasesTab = () => {
  const purchases = getPurchaseRows();
  const summary = getPurchasesSummary();
  const supplierRows = buildSpendingRows(purchases, (purchase) => purchase.supplierName).sort(
    (a, b) => b.total - a.total,
  );
  const categoryRows = buildSpendingRows(
    purchases,
    (purchase) => categoryLabels[purchase.ingredient.category] ?? purchase.ingredient.category,
  ).sort((a, b) => b.total - a.total);

  const mainSupplier = supplierRows[0];
  const mainCategory = categoryRows[0];

  return (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Card
          title={messages.dashboardTabs.purchases.totalSpent}
          content={formatCurrency(summary.total)}
          info={messages.dashboardTabs.purchases.spendingInfo}
        />
        <Card
          title={messages.dashboardTabs.purchases.pendingTotal}
          content={formatCurrency(summary.pendingTotal)}
          info={messages.dashboardTabs.purchases.pendingInfo}
        />
        <Card
          title={messages.dashboardTabs.purchases.mainSupplier}
          content={mainSupplier?.label ?? '-'}
          info={mainSupplier ? formatCurrency(mainSupplier.total) : '-'}
        />
        <Card
          title={messages.dashboardTabs.purchases.mostPurchasedCategory}
          content={mainCategory?.label ?? '-'}
          info={mainCategory ? formatCurrency(mainCategory.total) : '-'}
        />
      </Stack>

      <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ gap: 2, alignItems: 'flex-start' }}>
        <Stack sx={{ width: { xs: '100%', lg: 320 }, gap: 2, flexShrink: 0 }}>
          <Container title={messages.dashboardTabs.purchases.supplierSpending}>
            <Stack spacing={1}>
              {supplierRows.slice(0, 5).map((row) => (
                <Stack
                  key={row.label}
                  direction="row"
                  sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 1 }}
                >
                  <Stack>
                    <Typography variant="body1">{row.label}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {getPurchaseCountLabel(row.count)}
                    </Typography>
                  </Stack>
                  <Chip size="small" label={formatCurrency(row.total)} />
                </Stack>
              ))}
            </Stack>
          </Container>

          <Container title={messages.dashboardTabs.purchases.categorySpending}>
            <Stack spacing={1}>
              {categoryRows.slice(0, 5).map((row) => (
                <Stack
                  key={row.label}
                  direction="row"
                  sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 1 }}
                >
                  <Typography variant="body1">{row.label}</Typography>
                  <Chip size="small" label={formatCurrency(row.total)} />
                </Stack>
              ))}
            </Stack>
          </Container>
        </Stack>

        <Stack sx={{ flex: 1, minWidth: 0, width: '100%' }}>
          <PurchasesTable rows={purchases} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PurchasesTab;
