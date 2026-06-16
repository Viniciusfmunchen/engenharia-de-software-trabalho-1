import { messages } from '@/constants/messages';
import type { Supplier } from '@/types/bakery';
import Table, { type TableColumn } from '../ui/table';

interface SuppliersTableProps {
  rows: Supplier[];
}

const SuppliersTable = ({ rows }: SuppliersTableProps) => {
  const columns: TableColumn<Supplier>[] = [
    {
      id: 'name',
      label: messages.common.supplier,
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
    {
      id: 'contactName',
      label: messages.common.contactName,
      render: (row) => row.contactName,
      sortAccessor: (row) => row.contactName,
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

export default SuppliersTable;
