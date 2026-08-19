import { Box, Tab, Tabs, styled } from '@mui/material';

export const RaizAbas = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const CabecalhoAbas = styled(Box)({
  borderBottom: '1px solid #eadfce',
  backgroundColor: '#faf7f2',
});

export const AbasEstilizadas = styled(Tabs)({
  minHeight: 40,

  '& .MuiTabs-indicator': {
    backgroundColor: '#d6a15d',
    height: 3,
    borderRadius: '3px 3px 0 0',
  },
});

export const AbaEstilizada = styled(Tab)({
  minHeight: 40,
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.875rem',
  color: '#6b5547',
  padding: '8px 16px',

  '&.Mui-selected': {
    color: '#342419',
  },

  '&:hover': {
    color: '#342419',
  },
});

export const PainelAbaEstilizado = styled(Box)({
  paddingTop: 16,
});
