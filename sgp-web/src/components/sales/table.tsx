import type { TableColumn } from "../ui/table";
import Table from "../ui/table";

interface SalesTable {
  id: number,
  buyerName: string,
  quantity: number,
  revenue: number,
}

const SalesTable = () => {
  const rows: SalesTable[] = [
    {
      id: 1,
      buyerName: 'Pão Francês',
      quantity: 5100,
      revenue: 4335,
    },
    {
      id: 2,
      buyerName: 'Pão de Queijo',
      quantity: 2750,
      revenue: 3300,

    },
  ];

  const columns: TableColumn<SalesTable>[] = [
    {
      id: 'buyerName',
      label: 'Comprador',
      render: (row) => row.buyerName,
    },
    {
      id: 'quantity',
      label: 'Vendidos',
      align: 'right',
      render: (row) => row.quantity.toLocaleString('pt-BR'),
      sortAccessor: (row) => row.quantity,
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
      sortAccessor: (row) => row.revenue,
    },
  ];

  return (
    <Table
      columns={columns}
      rows={rows}
      getRowId={(row) => row.id}
    />
  );
}

export default SalesTable;
