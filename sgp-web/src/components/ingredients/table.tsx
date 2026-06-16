import { Chip } from '@mui/material';
import { messages } from '@/constants/messages';
import { breadIngredients } from '@/mock/breadRecipesMock';
import { formatCurrency } from '@/mock/operationsMock';
import type { Ingredient } from '@/types/bakery';
import Table, { type TableColumn } from '../ui/table';

interface IngredientsTableProps {
  rows?: Ingredient[];
}

const getStockStatus = (ingredient: Ingredient) => {
  if (ingredient.stockQuantity <= ingredient.minStockQuantity * 0.5) return messages.table.stockStatus.critical;
  if (ingredient.stockQuantity <= ingredient.minStockQuantity) return messages.table.stockStatus.low;

  return messages.table.stockStatus.ok;
};

const IngredientsTable = ({ rows = breadIngredients }: IngredientsTableProps) => {
  const columns: TableColumn<Ingredient>[] = [
    {
      id: 'name',
      label: messages.common.ingredients,
      render: (row) => row.name,
      sortAccessor: (row) => row.name,
    },
    {
      id: 'category',
      label: messages.common.category,
      render: (row) => row.category,
      sortAccessor: (row) => row.category,
    },
    {
      id: 'stockQuantity',
      label: messages.common.stock,
      align: 'right',
      render: (row) => `${row.stockQuantity.toLocaleString('pt-BR')} ${row.unit}`,
      sortAccessor: (row) => row.stockQuantity,
    },
    {
      id: 'minStockQuantity',
      label: messages.common.minimum,
      align: 'right',
      render: (row) => `${row.minStockQuantity.toLocaleString('pt-BR')} ${row.unit}`,
      sortAccessor: (row) => row.minStockQuantity,
    },
    {
      id: 'costPerUnit',
      label: messages.common.unitCost,
      align: 'right',
      render: (row) => formatCurrency(row.costPerUnit),
      sortAccessor: (row) => row.costPerUnit,
    },
    {
      id: 'status',
      label: messages.common.status,
      render: (row) => {
        const status = getStockStatus(row);

        return (
          <Chip
            size="small"
            label={status}
            color={
              status === messages.table.stockStatus.ok
                ? 'success'
                : status === messages.table.stockStatus.low
                  ? 'warning'
                  : 'error'
            }
            variant="outlined"
          />
        );
      },
      sortAccessor: (row) => getStockStatus(row),
    },
  ];

  return (
    <Table
      columns={columns}
      rows={rows}
      getRowId={(row) => row.id}
      defaultSort={{ columnId: 'stockQuantity', direction: 'asc' }}
    />
  );
};

export default IngredientsTable;
