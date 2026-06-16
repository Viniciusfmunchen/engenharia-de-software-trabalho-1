import type { TableColumn } from "../ui/table";
import Table from "../ui/table";

interface BreadSale {
  id: number;
  breadType: string;
  quantity: number;
  revenue: number;
  estimatedMargin: number;
}

const rows: BreadSale[] = [
  {
    id: 1,
    breadType: 'Pão Francês',
    quantity: 5100,
    revenue: 4335,
    estimatedMargin: 2948.31,
  },
  {
    id: 2,
    breadType: 'Pão de Queijo',
    quantity: 2750,
    revenue: 3300,
    estimatedMargin: 772.75,
  },
];

const RecipeTable = () => {
  const columns: TableColumn<BreadSale>[] = [
    {
      id: 'breadType',
      label: 'Tipo de pão',
      render: (row) => row.breadType,
    },
    {
      id: 'quantity',
      label: 'Vendidos',
      align: 'right',
      render: (row) => row.quantity.toLocaleString('pt-BR'),
      sortAccessor: (row) => row.breadType,
    },
    {
      id: 'revenue',
      label: 'Faturamento',
      align: 'right',
      render: (row) =>
        row.revenue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      sortAccessor: (row) => row.breadType,
    },
    {
      id: 'estimatedMargin',
      label: 'Margem estimada',
      align: 'right',
      render: (row) =>
        row.estimatedMargin.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      sortAccessor: (row) => row.breadType,
    },
  ];
  return (

    <Table
      columns={columns}
      rows={rows}
      getRowId={(row) => row.id}
    />

  )
}

export default RecipeTable;
