import PurchaseFormModal from '@/components/purchases/purchase-form-modal';
import SupplierFormModal from '@/components/suppliers/supplier-form-modal';
import PurchasesTable from '@/components/purchases/table';
import SuppliersTable from '@/components/suppliers/table';
import Card from '@/components/ui/card';
import Container from '@/components/ui/container';
import Tabs from '@/components/ui/tabs/tabs';
import { messages } from '@/constants/messages';
import PageLayout from '@/layouts/page';
import { breadIngredients } from '@/mock/breadRecipesMock';
import { getSuppliers, saveSuppliers } from '@/mock/entitiesMock';
import { formatCurrency, getPurchaseRows, purchasesMock } from '@/mock/operationsMock';
import type { PurchaseFormValues, SupplierFormValues } from '@/schemas/bakerySchemas';
import { bakeryColors } from '@/theme';
import type { Purchase, Supplier } from '@/types/bakery';
import { getNextId } from '@/utils/ids';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useMemo, useState } from 'react';

const Purchases = () => {
  const [search, setSearch] = useState('');
  const [purchases, setPurchases] = useState(() => getPurchaseRows());
  const [suppliers, setSuppliers] = useState(() => getSuppliers());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSupplierFormOpen, setIsSupplierFormOpen] = useState(false);
  const summary = useMemo(() => {
    const pending = purchases.filter((purchase) => purchase.status === 'Pendente');

    return {
      total: purchases.reduce((sum, purchase) => sum + purchase.totalCost, 0),
      count: purchases.length,
      pendingCount: pending.length,
      pendingTotal: pending.reduce((sum, purchase) => sum + purchase.totalCost, 0),
      suppliers: new Set(purchases.map((purchase) => purchase.supplierName)).size,
    };
  }, [purchases]);

  const normalizedSearch = search.trim().toLocaleLowerCase('pt-BR');
  const filteredPurchases = normalizedSearch
    ? purchases.filter((purchase) =>
        `${purchase.supplierName} ${purchase.ingredient.name} ${purchase.status}`
          .toLocaleLowerCase('pt-BR')
          .includes(normalizedSearch),
      )
    : purchases;

  const handleAddPurchase = (values: PurchaseFormValues) => {
    const purchase: Purchase = {
      id: getNextId(purchasesMock),
      ...values,
    };

    purchasesMock.push(purchase);
    setPurchases(getPurchaseRows());
  };

  const handleAddSupplier = (values: SupplierFormValues) => {
    const supplier: Supplier = {
      id: getNextId(suppliers),
      ...values,
    };
    const nextSuppliers = [...suppliers, supplier];

    saveSuppliers(nextSuppliers);
    setSuppliers(nextSuppliers);
  };

  const purchasesContent = (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Card title={messages.pages.purchases.totalPurchased} content={formatCurrency(summary.total)} info={messages.pages.purchases.mockOrders} />
        <Card
          title={messages.pages.purchases.pending}
          content={summary.pendingCount.toLocaleString('pt-BR')}
          info={`${formatCurrency(summary.pendingTotal)} ${messages.pages.purchases.awaitingReceipt}`}
        />
        <Card
          title={messages.pages.purchases.suppliers}
          content={summary.suppliers.toLocaleString('pt-BR')}
          info={`${summary.count} ${messages.pages.purchases.registeredPurchases}`}
        />
      </Stack>

      <Container>
        <TextField
          fullWidth
          size="small"
          label={messages.pages.purchases.searchLabel}
          placeholder={messages.pages.purchases.searchPlaceholder}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
        />
      </Container>

      <PurchasesTable rows={filteredPurchases} />
    </Stack>
  );

  const suppliersContent = (
    <Container
      title={messages.common.suppliers}
      action={
        <Button
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          sx={{
            bgcolor: bakeryColors.sidebar,
            color: bakeryColors.textLight,
            '&:hover': { bgcolor: bakeryColors.sidebarSelectedHover },
          }}
          onClick={() => setIsSupplierFormOpen(true)}
        >
          {messages.actions.addSupplier}
        </Button>
      }
      noPadding
    >
      <SuppliersTable rows={suppliers} />
    </Container>
  );

  return (
    <PageLayout
      title={messages.pages.purchases.title}
      aside={
        <Button
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          sx={{
            bgcolor: bakeryColors.sidebar,
            color: bakeryColors.textLight,
            '&:hover': { bgcolor: bakeryColors.sidebarSelectedHover },
          }}
          onClick={() => setIsFormOpen(true)}
        >
          {messages.actions.addPurchase}
        </Button>
      }
    >
      <>
        <Tabs
          tabs={[
            { label: messages.tabs.purchases, content: purchasesContent },
            { label: messages.tabs.suppliers, content: suppliersContent },
          ]}
        />

        <PurchaseFormModal
          open={isFormOpen}
          ingredients={breadIngredients}
          suppliers={suppliers}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddPurchase}
        />

        <SupplierFormModal
          open={isSupplierFormOpen}
          onClose={() => setIsSupplierFormOpen(false)}
          onSubmit={handleAddSupplier}
        />
      </>
    </PageLayout>
  );
};

export default Purchases;
