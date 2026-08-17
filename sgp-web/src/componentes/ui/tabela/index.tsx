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
import { mensagens } from '@/constantes/mensagens';

import { ConteinerTabelaEstilizado } from './estilos';

export type DirecaoOrdenacao = 'asc' | 'desc';

export type ValorOrdenacao = string | number | Date | null | undefined;

export interface EstadoOrdenacao {
  columnId: string;
  direction: DirecaoOrdenacao;
}

export interface ColunaTabela<T> {
  id: string;
  label: string;
  align?: TableCellProps['align'];
  width?: number | string;
  render: (linha: T) => ReactNode;
  sortAccessor?: (linha: T) => ValorOrdenacao;
}

interface PropriedadesTabela<T> {
  columns: ColunaTabela<T>[];
  rows: T[];
  getRowId: (linha: T) => string | number;
  emptyMessage?: string;
  defaultSort?: EstadoOrdenacao;
}

const compararValores = (a: ValorOrdenacao, b: ValorOrdenacao) => {
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

const Tabela = <T,>({
  columns,
  rows,
  getRowId,
  emptyMessage = mensagens.common.noRecords,
  defaultSort,
}: PropriedadesTabela<T>) => {
  const [ordenacao, setOrdenacao] = useState<EstadoOrdenacao | undefined>(defaultSort);

  const linhasOrdenadas = useMemo(() => {
    if (!ordenacao) return rows;

    const coluna = columns.find((item) => item.id === ordenacao.columnId);

    if (!coluna?.sortAccessor) return rows;

    return [...rows].sort((a, b) => {
      const resultado = compararValores(coluna.sortAccessor!(a), coluna.sortAccessor!(b));

      return ordenacao.direction === 'asc' ? resultado : -resultado;
    });
  }, [columns, rows, ordenacao]);

  const manipularOrdenacao = (coluna: ColunaTabela<T>) => {
    if (!coluna.sortAccessor) return;

    setOrdenacao((ordenacaoAtual) => {
      if (ordenacaoAtual?.columnId !== coluna.id) {
        return {
          columnId: coluna.id,
          direction: 'asc',
        };
      }

      return {
        columnId: coluna.id,
        direction: ordenacaoAtual.direction === 'asc' ? 'desc' : 'asc',
      };
    });
  };

  return (
    <ConteinerTabelaEstilizado>
      <MuiTable size="small">
        <TableHead>
          <TableRow>
            {columns.map((coluna) => {
              const estaOrdenada = ordenacao?.columnId === coluna.id;

              return (
                <TableCell
                  key={coluna.id}
                  align={coluna.align}
                  sortDirection={estaOrdenada ? ordenacao.direction : false}
                  sx={{ width: coluna.width }}
                >
                  {coluna.sortAccessor ? (
                    <TableSortLabel
                      active={estaOrdenada}
                      direction={estaOrdenada ? ordenacao.direction : 'asc'}
                      onClick={() => manipularOrdenacao(coluna)}
                    >
                      {coluna.label}
                    </TableSortLabel>
                  ) : (
                    coluna.label
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {linhasOrdenadas.map((linha) => (
            <TableRow key={getRowId(linha)}>
              {columns.map((coluna) => (
                <TableCell key={coluna.id} align={coluna.align}>
                  {coluna.render(linha)}
                </TableCell>
              ))}
            </TableRow>
          ))}

          {linhasOrdenadas.length === 0 && (
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
    </ConteinerTabelaEstilizado>
  );
};

export default Tabela;
