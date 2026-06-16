import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GrainIcon from '@mui/icons-material/Grain';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
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
    label: 'Painel',
    value: 'dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    label: 'Receitas',
    value: 'recipes',
    path: '/recipes',
    icon: <RestaurantMenuIcon />,
  },
  {
    label: 'Ingredientes',
    value: 'ingredients',
    path: '/ingredients',
    icon: <GrainIcon />,
  },
  {
    label: 'Compras',
    value: 'purchases',
    path: '/purchases',
    icon: <ShoppingCartIcon />,
  },
  {
    label: 'Vendas',
    value: 'sales',
    path: '/sales',
    icon: <PointOfSaleIcon />,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split('/')[1] || '';

  const handleToggleCollapsed = () => {
    setCollapsed((currentCollapsed) => !currentCollapsed);
  };

  return (
    <SidebarContainer collapsed={collapsed}>
      <SidebarHeader>
        <SidebarIconSlot>
          <IconButton
            onClick={handleToggleCollapsed}
            sx={{
              width: 40,
              height: 40,
              color: 'whitesmoke',
            }}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </SidebarIconSlot>

        <Stack>
          <SidebarText collapsed={collapsed} variant="h6">
            SGP
          </SidebarText>

          <SidebarText collapsed={collapsed} variant="caption">
            Sistema de Gerenciamento de Padarias
          </SidebarText>
        </Stack>
      </SidebarHeader>
      <Divider color={'#463428'} />
      <SidebarMenu>
        {menuItems.map((item) => (
          <Tooltip key={item.value} title={collapsed ? item.label : ''} placement="right">
            <SidebarToggleButton
              value={item.value}
              selected={currentPath === item.value}
              onClick={() => navigate(item.path)}
            >
              <SidebarIconSlot>{item.icon}</SidebarIconSlot>

              <SidebarText collapsed={collapsed} variant="body2">
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
