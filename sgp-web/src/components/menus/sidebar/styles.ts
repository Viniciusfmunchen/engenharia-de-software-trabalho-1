import { COLLAPSED_SIDEBAR_WIDTH, SIDEBAR_WIDTH } from '@/constants/ui';
import { Box, Stack, ToggleButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

type CollapsedProps = {
  collapsed?: boolean;
};

const SIDEBAR_PADDING = 8;
const ICON_SLOT_WIDTH = COLLAPSED_SIDEBAR_WIDTH - SIDEBAR_PADDING * 2;
const BUTTON_HEIGHT = 44;

export const SidebarContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<CollapsedProps>(({ theme, collapsed }) => ({
  width: collapsed ? COLLAPSED_SIDEBAR_WIDTH : SIDEBAR_WIDTH,
  height: '100vh',
  flexShrink: 0,
  overflow: 'hidden',
  backgroundColor: '#2f2118',
  color: '#fff7ed',
  transition: theme.transitions.create('width'),
}));

export const SidebarHeader = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  minHeight: 72,
  padding: theme.spacing(2, 0, 2, 1),
}));

export const SidebarMenu = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
  padding: theme.spacing(1),
}));

export const SidebarIconSlot = styled(Box)(() => ({
  width: ICON_SLOT_WIDTH,
  minWidth: ICON_SLOT_WIDTH,
  height: BUTTON_HEIGHT,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const SidebarToggleButton = styled(ToggleButton)(({ theme }) => ({
  width: '100%',
  height: BUTTON_HEIGHT,
  padding: 0,
  justifyContent: 'flex-start',
  color: '#fff7ed',
  border: 'none',
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  overflow: 'hidden',

  '&:hover': {
    backgroundColor: '#463428',
  },

  '&.Mui-selected': {
    backgroundColor: '#6b5547',
    color: '#fff7ed',
  },

  '&.Mui-selected:hover': {
    backgroundColor: '#7a6251',
  },
}));

export const SidebarText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<CollapsedProps>(({ theme, collapsed }) => ({
  opacity: collapsed ? 0 : 1,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  transition: theme.transitions.create('opacity'),
}));
