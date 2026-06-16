import { TableContainer } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  border: '1px solid #eadfce',
  borderRadius: theme.spacing(1.5),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,

  '& .MuiTableCell-root': {
    borderColor: '#eadfce',
    fontSize: theme.typography.body2.fontSize,
  },

  '& .MuiTableHead-root .MuiTableCell-root': {
    backgroundColor: '#fff7ed',
    color: '#6b5547',
    fontSize: theme.typography.caption.fontSize,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    padding: theme.spacing(1, 1.5),
  },

  '& .MuiTableSortLabel-root': {
    color: '#6b5547',
  },

  '& .MuiTableSortLabel-root:hover': {
    color: '#2f2118',
  },

  '& .MuiTableSortLabel-root.Mui-active': {
    color: '#2f2118',
  },

  '& .MuiTableSortLabel-icon': {
    color: '#d6a15d !important',
  },

  '& .MuiTableBody-root .MuiTableCell-root': {
    color: '#2f2118',
    padding: theme.spacing(1.2, 1.5),
  },

  '& .MuiTableBody-root .MuiTableRow-root:hover': {
    backgroundColor: '#faf7f2',
  },

  '& .MuiTableBody-root .MuiTableRow-root:last-child .MuiTableCell-root': {
    borderBottom: 0,
  },
}));
