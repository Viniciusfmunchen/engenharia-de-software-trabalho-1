import { Chip } from '@mui/material';
import { messages } from '@/constants/messages';
import { formatCurrency, formatDate, getPurchaseRows } from '@/mock/operationsMock';
import type { PurchaseRow } from '@/types/bakery';
import Table, { type TableColumn } from '../ui/table';

interface PurchasesTableProps {
  rows?: PurchaseRow[];
}

const PurchasesTable = ({ rows = getPurchaseRows() }: PurchasesTableProps) => {
  const columns: TableColumn<PurchaseRow>[] = [
    {
      id: 'date',
      label: messages.common.date,
      render: (row) => formatDate(row.date),
      sortAccessor: (row) => new Date(row.date),
    },
    {
      id: 'supplierName',
      label: messages.common.supplier,
      render: (row) => row.supplierName,
      sortAccessor: (row) => row.supplierName,
    },
    {
      id: 'ingredient',
      label: messages.common.ingredients,
      render: (row) => row.ingredient.name,
      sortAccessor: (row) => row.ingredient.name,
    },
    {
      id: 'quantity',
      label: messages.common.quantity,
      align: 'right',
      render: (row) => `${row.quantity.toLocaleString('pt-BR')} ${row.ingredient.unit}`,
      sortAccessor: (row) => row.quantity,
    },
    {
      id: 'totalCost',
      label: messages.common.total,
      align: 'right',
      render: (row) => formatCurrency(row.totalCost),
      sortAccessor: (row) => row.totalCost,
    },
    {
      id: 'status',
      label: messages.common.status,
      render: (row) => (
        <Chip
          size="small"
          label={row.status}
          color={row.status === 'Recebida' ? 'success' : 'warning'}
          variant="outlined"
        />
      ),
      sortAccessor: (row) => row.status,
    },
  ];

  return (
    <Table
      columns={columns}
      rows={rows}
      getRowId={(row) => row.id}
      defaultSort={{ columnId: 'date', direction: 'desc' }}
    />
  );
};

export default PurchasesTable;
