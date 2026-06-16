import { useMemo, useState, type ReactNode } from 'react';
import type { TableCellProps } from '@mui/material';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import { messages } from '@/constants/messages';

import { StyledTableContainer } from './styles';

type SortDirection = 'asc' | 'desc';

type SortValue = string | number | Date | null | undefined;

interface SortState {
  columnId: string;
  direction: SortDirection;
}

export interface TableColumn<T> {
  id: string;
  label: string;
  align?: TableCellProps['align'];
  width?: number | string;
  render: (row: T) => ReactNode;
  sortAccessor?: (row: T) => SortValue;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  rows: T[];
  getRowId: (row: T) => string | number;
  emptyMessage?: string;
  defaultSort?: SortState;
}

const compareValues = (a: SortValue, b: SortValue) => {
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  return String(a).localeCompare(String(b), 'pt-BR', {
    numeric: true,
    sensitivity: 'base',
  });
};

const Table = <T,>({
  columns,
  rows,
  getRowId,
  emptyMessage = messages.common.noRecords,
  defaultSort,
}: TableProps<T>) => {
  const [sort, setSort] = useState<SortState | undefined>(defaultSort);

  const sortedRows = useMemo(() => {
    if (!sort) return rows;

    const column = columns.find((item) => item.id === sort.columnId);

    if (!column?.sortAccessor) return rows;

    return [...rows].sort((a, b) => {
      const result = compareValues(column.sortAccessor!(a), column.sortAccessor!(b));

      return sort.direction === 'asc' ? result : -result;
    });
  }, [columns, rows, sort]);

  const handleSort = (column: TableColumn<T>) => {
    if (!column.sortAccessor) return;

    setSort((currentSort) => {
      if (currentSort?.columnId !== column.id) {
        return {
          columnId: column.id,
          direction: 'asc',
        };
      }

      return {
        columnId: column.id,
        direction: currentSort.direction === 'asc' ? 'desc' : 'asc',
      };
    });
  };

  return (
    <StyledTableContainer>
      <MuiTable size="small">
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              const isSorted = sort?.columnId === column.id;

              return (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sortDirection={isSorted ? sort.direction : false}
                  sx={{ width: column.width }}
                >
                  {column.sortAccessor ? (
                    <TableSortLabel
                      active={isSorted}
                      direction={isSorted ? sort.direction : 'asc'}
                      onClick={() => handleSort(column)}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedRows.map((row) => (
            <TableRow key={getRowId(row)}>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.render(row)}
                </TableCell>
              ))}
            </TableRow>
          ))}

          {sortedRows.length === 0 && (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <Typography variant="body2" color="text.secondary">
                  {emptyMessage}
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </MuiTable>
    </StyledTableContainer>
  );
};

export default Table;
