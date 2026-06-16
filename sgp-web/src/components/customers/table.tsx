import { messages } from '@/constants/messages';
import type { Customer } from '@/types/bakery';
import Table, { type TableColumn } from '../ui/table';

interface CustomersTableProps {
  rows: Customer[];
}

const CustomersTable = ({ rows }: CustomersTableProps) => {
  const columns: TableColumn<Customer>[] = [
    {
      id: 'name',
      label: messages.common.customers,
      render: (row) => row.name,
      sortAccessor: (row) => row.name,
    },
    {
      id: 'document',
      label: messages.common.document,
      render: (row) => row.document,
      sortAccessor: (row) => row.document,
    },
    {
      id: 'phone',
      label: messages.common.phone,
      render: (row) => row.phone,
      sortAccessor: (row) => row.phone,
    },
  ];

  return (
    <Table
      columns={columns}
      rows={rows}
      getRowId={(row) => row.id}
      defaultSort={{ columnId: 'name', direction: 'asc' }}
    />
  );
};

export default CustomersTable;
