import { messages } from '@/constants/messages';
import { formatCurrency, getCustomerSalesRows } from '@/mock/operationsMock';
import type { CustomerSalesRow } from '@/types/bakery';
import Table, { type TableColumn } from '../ui/table';

const SalesTable = () => {
  const columns: TableColumn<CustomerSalesRow>[] = [
    {
      id: 'buyerName',
      label: messages.common.buyer,
      render: (row) => row.buyerName,
      sortAccessor: (row) => row.buyerName,
    },
    {
      id: 'orders',
      label: messages.common.orders,
      align: 'right',
      render: (row) => row.orders.toLocaleString('pt-BR'),
      sortAccessor: (row) => row.orders,
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
      render: (row) => formatCurrency(row.revenue),
      sortAccessor: (row) => row.revenue,
    },
  ];

  return (
    <Table
      columns={columns}
      rows={getCustomerSalesRows()}
      getRowId={(row) => row.id}
      defaultSort={{ columnId: 'revenue', direction: 'desc' }}
    />
  );
};

export default SalesTable;
