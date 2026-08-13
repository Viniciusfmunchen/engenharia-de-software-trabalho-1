import { messages } from '@/constants/messages';
import { formatCurrency } from '@/mock/operationsMock';
import type { BreadRecipe, BreadSalesRow } from '@/types/bakery';
import Table, { type TableColumn } from '../ui/table';
import { useApiQuery } from '@/hooks/use-api-query';
import type { BreadRecipeFormInput } from '@/schemas/bakerySchemas';
import { createCrudService } from '@/services/crud';

const RecipeTable = () => {
  const recipeService = createCrudService<BreadRecipe, BreadRecipeFormInput>('bread-recipes');
  const { data: recipes, isLoading } = useApiQuery(['recipes'], () => recipeService.list());

  if (isLoading) return <div>Carregando...</div>;
  if (!recipes) return <div>Sem receitas</div>;

  const columns: TableColumn<BreadSalesRow>[] = [
    {
      id: 'breadName',
      label: messages.table.breadType,
      render: (row) => row.breadName,
      sortAccessor: (row) => row.breadName,
    },
    {
      id: 'quantity',
      label: messages.table.sold,
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
    {
      id: 'estimatedProfit',
      label: messages.common.estimatedProfit,
      align: 'right',
      render: (row) => formatCurrency(row.estimatedProfit),
      sortAccessor: (row) => row.estimatedProfit,
    },
  ];

  return (
    <Table
      columns={columns}
      rows={recipes}
      getRowId={(row) => row.id}
      defaultSort={{ columnId: 'quantity', direction: 'desc' }}
    />
  );
};

export default RecipeTable;
