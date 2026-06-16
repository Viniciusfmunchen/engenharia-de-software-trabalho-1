import CustomerFormModal from '@/components/customers/customer-form-modal';
import SaleFormModal from '@/components/sales/sale-form-modal';
import CustomersTable from '@/components/customers/table';
import Card from '@/components/ui/card';
import Container from '@/components/ui/container';
import Table, { type TableColumn } from '@/components/ui/table';
import Tabs from '@/components/ui/tabs/tabs';
import { messages } from '@/constants/messages';
import PageLayout from '@/layouts/page';
import { breadRecipes } from '@/mock/breadRecipesMock';
import { getCustomers, saveCustomers } from '@/mock/entitiesMock';
import {
  formatCurrency,
  formatDate,
  getRecipeById,
  getSaleProfit,
  getSaleRevenue,
  salesMock,
} from '@/mock/operationsMock';
import type { CustomerFormValues, SaleFormValues } from '@/schemas/bakerySchemas';
import { bakeryColors } from '@/theme';
import type { Customer, Sale } from '@/types/bakery';
import { getNextId } from '@/utils/ids';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useMemo, useState } from 'react';

const Sales = () => {
  const [search, setSearch] = useState('');
  const [sales, setSales] = useState(() => [...salesMock]);
  const [customers, setCustomers] = useState(() => getCustomers());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);
  const summary = useMemo(() => {
    const revenue = sales.reduce((total, sale) => total + getSaleRevenue(sale), 0);
    const profit = sales.reduce((total, sale) => total + getSaleProfit(sale), 0);

    return {
      revenue,
      profit,
      orders: sales.length,
      averageTicket: sales.length ? revenue / sales.length : 0,
    };
  }, [sales]);

  const normalizedSearch = search.trim().toLocaleLowerCase('pt-BR');
  const filteredSales = normalizedSearch
    ? sales.filter((sale) => {
      const recipe = getRecipeById(sale.recipeId);

      return `${sale.buyerName} ${recipe?.name ?? ''} ${sale.paymentMethod}`
        .toLocaleLowerCase('pt-BR')
        .includes(normalizedSearch);
    })
    : sales;

  const columns: TableColumn<Sale>[] = [
    {
      id: 'date',
      label: messages.common.date,
      render: (row) => formatDate(row.date),
      sortAccessor: (row) => new Date(row.date),
    },
    {
      id: 'buyerName',
      label: messages.common.buyer,
      render: (row) => row.buyerName,
      sortAccessor: (row) => row.buyerName,
    },
    {
      id: 'bread',
      label: messages.common.bread,
      render: (row) => getRecipeById(row.recipeId)?.name ?? 'Receita removida',
      sortAccessor: (row) => getRecipeById(row.recipeId)?.name,
    },
    {
      id: 'quantity',
      label: messages.common.units,
      align: 'right',
      render: (row) => row.quantity.toLocaleString('pt-BR'),
      sortAccessor: (row) => row.quantity,
    },
    {
      id: 'revenue',
      label: messages.common.revenue,
      align: 'right',
      render: (row) => formatCurrency(getSaleRevenue(row)),
      sortAccessor: (row) => getSaleRevenue(row),
    },
    {
      id: 'profit',
      label: messages.common.estimatedProfit,
      align: 'right',
      render: (row) => formatCurrency(getSaleProfit(row)),
      sortAccessor: (row) => getSaleProfit(row),
    },
  ];

  const handleAddSale = (values: SaleFormValues) => {
    const sale: Sale = {
      id: getNextId(salesMock),
      ...values,
    };

    salesMock.push(sale);
    setSales([...salesMock]);
  };

  const handleAddCustomer = (values: CustomerFormValues) => {
    const customer: Customer = {
      id: getNextId(customers),
      ...values,
    };
    const nextCustomers = [...customers, customer];

    saveCustomers(nextCustomers);
    setCustomers(nextCustomers);
  };

  const salesContent = (
    <Stack spacing={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
        <Card title={messages.common.revenue} content={formatCurrency(summary.revenue)} info={messages.pages.sales.saleSum} />
        <Card title={messages.common.estimatedProfit} content={formatCurrency(summary.profit)} info={messages.pages.sales.priceMinusCost} />
        <Card title={messages.common.averageTicket} content={formatCurrency(summary.averageTicket)} info={`${summary.orders} ${messages.pages.sales.registeredSales}`} />
      </Stack>

      <Container>
        <TextField
          fullWidth
          size="small"
          label={messages.pages.sales.searchLabel}
          placeholder={messages.pages.sales.searchPlaceholder}
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

      <Table
        columns={columns}
        rows={filteredSales}
        getRowId={(row) => row.id}
        defaultSort={{ columnId: 'date', direction: 'desc' }}
      />
    </Stack>
  );

  const customersContent = (
    <Container
      title={messages.common.customers}
      action={
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: bakeryColors.sidebar,
            color: bakeryColors.textLight,
            '&:hover': { bgcolor: bakeryColors.sidebarSelectedHover },
          }}
          onClick={() => setIsCustomerFormOpen(true)}
        >
          {messages.actions.addCustomer}
        </Button>
      }
      noPadding
    >
      <CustomersTable rows={customers} />
    </Container>
  );

  return (
    <PageLayout
      title={messages.pages.sales.title}
      aside={
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: bakeryColors.sidebar,
            color: bakeryColors.textLight,
            '&:hover': { bgcolor: bakeryColors.sidebarSelectedHover },
          }}
          onClick={() => setIsFormOpen(true)}
        >
          {messages.actions.addSale}
        </Button>
      }
    >
      <>
        <Tabs
          tabs={[
            { label: messages.tabs.sales, content: salesContent },
            { label: messages.tabs.customers, content: customersContent },
          ]}
        />

        <SaleFormModal
          open={isFormOpen}
          recipes={breadRecipes}
          customers={customers}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddSale}
        />

        <CustomerFormModal
          open={isCustomerFormOpen}
          onClose={() => setIsCustomerFormOpen(false)}
          onSubmit={handleAddCustomer}
        />
      </>
    </PageLayout>
  );
};

export default Sales;
