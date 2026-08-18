import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExpandLess, ExpandMore } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GrainIcon from '@mui/icons-material/Grain';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Collapse, Divider, IconButton, List, Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { mensagens } from '@/constantes/mensagens';
import { useBarraLateral } from '@/contextos/barra-lateral';
import { useLocation, useNavigate } from 'react-router';

import {
  BotaoItemBarraLateral,
  CabecalhoBarraLateral,
  ConteinerBarraLateral,
  EspacoIconeBarraLateral,
  BotaoSubitemBarraLateral,
  MenuBarraLateral,
  TextoBarraLateral,
} from './estilos';
import { coresPadaria } from '@/tema';

const itensMenu = [
  {
    rotulo: mensagens.navegacao.painel,
    valor: 'painel',
    caminho: '/painel',
    icone: <DashboardIcon />,
  },
  {
    rotulo: mensagens.navegacao.receitasPao,
    valor: 'receitas',
    caminho: '/receitas',
    icone: <RestaurantMenuIcon />,
  },
  {
    rotulo: mensagens.navegacao.ingredientes,
    valor: 'ingredientes',
    caminho: '/ingredientes',
    icone: <GrainIcon />,
    filhos: [
      {
        rotulo: mensagens.navegacao.ingredientes,
        valor: 'ingredientes',
        caminho: '/ingredientes'
      },
      {
        rotulo: mensagens.navegacao.categorias,
        valor: 'categorias',
        caminho: '/ingredientes/categorias',
      },
    ],
  },
  {
    rotulo: mensagens.navegacao.compras,
    valor: 'compras',
    caminho: '/compras',
    icone: <ShoppingCartIcon />,
  },
  {
    rotulo: mensagens.navegacao.vendas,
    valor: 'vendas',
    caminho: '/vendas',
    icone: <PointOfSaleIcon />,
  },
  {
    rotulo: 'Unidades de Medida',
    valor: 'unidades-medida',
    caminho: '/unidades-medida',
    icone: <PointOfSaleIcon />,
  },
];

const BarraLateral = () => {
  const tema = useTheme();
  const { recolhida, alternarRecolhida } = useBarraLateral();

  const navegar = useNavigate();
  const localizacao = useLocation();

  const rotaAtiva = localizacao.pathname;

  const [expandidos, setExpandidos] = useState<Record<string, boolean>>({});

  const alternarExpansao = (valor: string) => {
    if (recolhida) {
      alternarRecolhida();
    }
    setExpandidos((prev) => ({ ...prev, [valor]: !prev[valor] }));
  };

  return (
    <ConteinerBarraLateral recolhida={recolhida}>
      <CabecalhoBarraLateral>
        <EspacoIconeBarraLateral>
          <IconButton
            onClick={alternarRecolhida}
            sx={{
              width: 40,
              height: 40,
              color: 'whitesmoke',
            }}
          >
            {recolhida ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </EspacoIconeBarraLateral>

        <Stack>
          <TextoBarraLateral recolhida={recolhida} variant="h6">
            {mensagens.aplicativo.nomeCurto}
          </TextoBarraLateral>

          <TextoBarraLateral recolhida={recolhida} variant="caption">
            {mensagens.aplicativo.nome}
          </TextoBarraLateral>
        </Stack>
      </CabecalhoBarraLateral>
      <Divider color={'#463428'} />
      <MenuBarraLateral>
        {itensMenu.map((item) => {
          const selecionado = rotaAtiva === item.caminho || (item.filhos && item.filhos.some(f => rotaAtiva === f.caminho));
          const expandido = expandidos[item.valor];

          return (
            <Stack key={item.valor}>
              <Tooltip title={recolhida ? item.rotulo : ''} placement="right">
                <BotaoItemBarraLateral
                  value={item.valor}
                  selected={selecionado || expandido}
                  onClick={() => {
                    if (item.filhos) {
                      navegar(item.caminho);
                      alternarExpansao(item.valor);
                    } else {
                      navegar(item.caminho);
                      setExpandidos({})
                    }
                  }}
                >
                  <EspacoIconeBarraLateral>
                    {item.icone}
                  </EspacoIconeBarraLateral>

                  <TextoBarraLateral recolhida={recolhida} variant="body2" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    {item.rotulo}
                  </TextoBarraLateral>

                  {item.filhos && !recolhida && (
                    expandido ? <ExpandLess fontSize="small" sx={{ color: 'inherit' }} /> : <ExpandMore fontSize="small" sx={{ color: 'inherit' }} />
                  )}
                </BotaoItemBarraLateral>
              </Tooltip>

              {item.filhos && (
                <Collapse in={expandido && !recolhida} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ paddingTop: 1, background: coresPadaria.barraLateralHover, mx: 1, borderRadius: '0px 0px 16px 16px' }} >
                    {item.filhos.map((filho) => (
                      <BotaoSubitemBarraLateral
                        key={filho.valor}
                        value={filho.valor}
                        selected={rotaAtiva === filho.caminho}
                        onClick={() => navegar(filho.caminho)}
                      >
                        <TextoBarraLateral recolhida={recolhida} variant="body2">
                          {filho.rotulo}
                        </TextoBarraLateral>
                      </BotaoSubitemBarraLateral>
                    ))}
                  </List>
                </Collapse>
              )}
            </Stack>
          );
        })}
      </MenuBarraLateral>
    </ConteinerBarraLateral>
  );
};

export default BarraLateral;
