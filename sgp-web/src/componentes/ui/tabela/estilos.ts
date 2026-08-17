import { TableContainer, styled } from '@mui/material';

export const ConteinerTabelaEstilizado = styled(TableContainer)({
  backgroundColor: '#ffffff',
  border: '1px solid #eadfce',
  borderRadius: 8,
  overflow: 'hidden',

  '& .MuiTableHead-root': {
    backgroundColor: '#f7f1e7',
  },

  '& .MuiTableCell-head': {
    color: '#6b5547',
    fontWeight: 600,
    borderBottom: '1px solid #eadfce',
  },

  '& .MuiTableCell-body': {
    color: '#2f2118',
    borderBottom: '1px solid #f1e7d8',
  },

  '& .MuiTableRow-root:last-of-type .MuiTableCell-body': {
    borderBottom: 'none',
  },
});
