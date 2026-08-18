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
];

const BarraLateral = () => {
  const { recolhida, alternarRecolhida } = useBarraLateral();
  const tema = useTheme();
  const ehCompacto = useMediaQuery(tema.breakpoints.down('sm'));
  const recolhidaEfetiva = recolhida || ehCompacto;


  const navegar = useNavigate();
  const localizacao = useLocation();

  // Para saber se estamos na rota pai ou em uma filha (ex: ingredientes ou ingredientes/categorias)
  const rotaAtiva = localizacao.pathname;
  
  // Estado para controlar quais menus estão expandidos
  const [expandidos, setExpandidos] = useState<Record<string, boolean>>({});

  const alternarExpansao = (valor: string) => {
    if (recolhidaEfetiva) {
      alternarRecolhida(); // Expande a barra lateral se estiver recolhida
    }
    setExpandidos((prev) => ({ ...prev, [valor]: !prev[valor] }));
  };

  return (
    <ConteinerBarraLateral recolhida={recolhidaEfetiva}>
      <CabecalhoBarraLateral>
        <EspacoIconeBarraLateral>
          <IconButton
            onClick={alternarRecolhida}
            disabled={ehCompacto}
            sx={{
              width: 40,
              height: 40,
              color: 'whitesmoke',
            }}
          >
            {recolhidaEfetiva ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </EspacoIconeBarraLateral>

        <Stack>
          <TextoBarraLateral recolhida={recolhidaEfetiva} variant="h6">
            {mensagens.aplicativo.nomeCurto}
          </TextoBarraLateral>

          <TextoBarraLateral recolhida={recolhidaEfetiva} variant="caption">
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
              <Tooltip title={recolhidaEfetiva ? item.rotulo : ''} placement="right">
                <BotaoItemBarraLateral
                  value={item.valor}
                  selected={selecionado}
                  onClick={() => {
                    if (item.filhos) {
                      alternarExpansao(item.valor);
                    }
                    navegar(item.caminho);
                  }}
                >
                  <EspacoIconeBarraLateral>
                    {item.icone}
                  </EspacoIconeBarraLateral>

                  <TextoBarraLateral recolhida={recolhidaEfetiva} variant="body2" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    {item.rotulo}
                  </TextoBarraLateral>

                  {item.filhos && !recolhidaEfetiva && (
                    expandido ? <ExpandLess fontSize="small" sx={{ color: 'inherit' }} /> : <ExpandMore fontSize="small" sx={{ color: 'inherit' }} />
                  )}
                </BotaoItemBarraLateral>
              </Tooltip>

              {item.filhos && (
                <Collapse in={expandido && !recolhidaEfetiva} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.filhos.map((filho) => (
                      <BotaoSubitemBarraLateral
                        key={filho.valor}
                        value={filho.valor}
                        selected={rotaAtiva === filho.caminho}
                        onClick={() => navegar(filho.caminho)}
                      >
                        <TextoBarraLateral recolhida={recolhidaEfetiva} variant="body2">
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
