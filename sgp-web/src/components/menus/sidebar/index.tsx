import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GrainIcon from '@mui/icons-material/Grain';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Divider, IconButton, Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { messages } from '@/constants/messages';
import { useSidebar } from '@/contexts/sidebar';
import { getLowStockIngredients } from '@/mock/operationsMock';
import { useLocation, useNavigate } from 'react-router';

import {
  SidebarContainer,
  SidebarHeader,
  SidebarIconSlot,
  SidebarMenu,
  SidebarText,
  SidebarToggleButton,
} from './styles';

const menuItems = [
  {
    label: messages.nav.dashboard,
    value: 'dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    label: messages.nav.breadRecipes,
    value: 'bread-recipes',
    path: '/bread-recipes',
    icon: <RestaurantMenuIcon />,
  },
  {
    label: messages.nav.ingredients,
    value: 'ingredients',
    path: '/ingredients',
    icon: <GrainIcon />,
  },
  {
    label: messages.nav.purchases,
    value: 'purchases',
    path: '/purchases',
    icon: <ShoppingCartIcon />,
  },
  {
    label: messages.nav.sales,
    value: 'sales',
    path: '/sales',
    icon: <PointOfSaleIcon />,
  },
];

const Sidebar = () => {
  const { collapsed, toggleCollapsed } = useSidebar();
  const theme = useTheme();
  const isCompact = useMediaQuery(theme.breakpoints.down('sm'));
  const effectiveCollapsed = collapsed || isCompact;
  const lowStockCount = getLowStockIngredients().length;

  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split('/')[1] || '';

  return (
    <SidebarContainer collapsed={effectiveCollapsed}>
      <SidebarHeader>
        <SidebarIconSlot>
          <IconButton
            onClick={toggleCollapsed}
            disabled={isCompact}
            sx={{
              width: 40,
              height: 40,
              color: 'whitesmoke',
            }}
          >
            {effectiveCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </SidebarIconSlot>

        <Stack>
          <SidebarText collapsed={effectiveCollapsed} variant="h6">
            {messages.app.shortName}
          </SidebarText>

          <SidebarText collapsed={effectiveCollapsed} variant="caption">
            {messages.app.name}
          </SidebarText>
        </Stack>
      </SidebarHeader>
      <Divider color={'#463428'} />
      <SidebarMenu>
        {menuItems.map((item) => (
          <Tooltip key={item.value} title={effectiveCollapsed ? item.label : ''} placement="right">
            <SidebarToggleButton
              value={item.value}
              selected={currentPath === item.value}
              onClick={() => navigate(item.path)}
            >
              <SidebarIconSlot>
                {item.value === 'ingredients' && lowStockCount > 0 ? (
                  <Badge badgeContent={lowStockCount} color="error">
                    {item.icon}
                  </Badge>
                ) : (
                  item.icon
                )}
              </SidebarIconSlot>

              <SidebarText collapsed={effectiveCollapsed} variant="body2">
                {item.label}
              </SidebarText>
            </SidebarToggleButton>
          </Tooltip>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
