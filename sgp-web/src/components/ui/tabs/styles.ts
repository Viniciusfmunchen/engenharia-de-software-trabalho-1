import { bakeryColors } from '@/theme';
import { Box, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TabsRoot = styled(Box)(() => ({
  width: '100%',
}));

export const TabsHeader = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  maxWidth: '100%',
  borderBottom: '1px solid #eadfce',
  backgroundColor: '#fff7ed',
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 36,

  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(0.5),
  },

  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  minHeight: 34,
  color: '#6b5547',
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: 0,
  transition: theme.transitions.create(['background-color', 'color']),

  '&:first-of-type': {
    borderTopLeftRadius: theme.spacing(1),
  },

  '&:last-of-type': {
    borderTopRightRadius: theme.spacing(1),
  },

  '&:hover': {
    backgroundColor: '#f1e5d2',
    color: '#2f2118',
  },

  '&.Mui-selected': {
    backgroundColor: bakeryColors.sidebar,
    color: '#fff7ed',
  },
}));

export const StyledTabPanel = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));
