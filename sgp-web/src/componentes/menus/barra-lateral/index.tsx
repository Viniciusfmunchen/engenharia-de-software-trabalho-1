import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GrainIcon from '@mui/icons-material/Grain';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Divider, IconButton, Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { mensagens } from '@/constantes/mensagens';
import { useBarraLateral } from '@/contextos/barra-lateral';
import { obterIngredientesEstoqueBaixo } from '@/mocks/operacoes-mock';
import { useLocation, useNavigate } from 'react-router';

import {
  BotaoItemBarraLateral,
  CabecalhoBarraLateral,
  ConteinerBarraLateral,
  EspacoIconeBarraLateral,
  MenuBarraLateral,
  TextoBarraLateral,
} from './estilos';

const itensMenu = [
  {
    rotulo: mensagens.nav.dashboard,
    valor: 'painel',
    caminho: '/painel',
    icone: <DashboardIcon />,
  },
  {
    rotulo: mensagens.nav.breadRecipes,
    valor: 'receitas',
    caminho: '/receitas',
    icone: <RestaurantMenuIcon />,
  },
  {
    rotulo: mensagens.nav.ingredients,
    valor: 'ingredientes',
    caminho: '/ingredientes',
    icone: <GrainIcon />,
  },
  {
    rotulo: mensagens.nav.purchases,
    valor: 'compras',
    caminho: '/compras',
    icone: <ShoppingCartIcon />,
  },
  {
    rotulo: mensagens.nav.sales,
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
  const quantidadeEstoqueBaixo = obterIngredientesEstoqueBaixo().length;

  const navegar = useNavigate();
  const localizacao = useLocation();

  const caminhoAtual = localizacao.pathname.split('/')[1] || '';

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
            {mensagens.app.shortName}
          </TextoBarraLateral>

          <TextoBarraLateral recolhida={recolhidaEfetiva} variant="caption">
            {mensagens.app.name}
          </TextoBarraLateral>
        </Stack>
      </CabecalhoBarraLateral>
      <Divider color={'#463428'} />
      <MenuBarraLateral>
        {itensMenu.map((item) => (
          <Tooltip key={item.valor} title={recolhidaEfetiva ? item.rotulo : ''} placement="right">
            <BotaoItemBarraLateral
              value={item.valor}
              selected={caminhoAtual === item.valor}
              onClick={() => navegar(item.caminho)}
            >
              <EspacoIconeBarraLateral>
                {item.valor === 'ingredientes' && quantidadeEstoqueBaixo > 0 ? (
                  <Badge badgeContent={quantidadeEstoqueBaixo} color="error">
                    {item.icone}
                  </Badge>
                ) : (
                  item.icone
                )}
              </EspacoIconeBarraLateral>

              <TextoBarraLateral recolhida={recolhidaEfetiva} variant="body2">
                {item.rotulo}
              </TextoBarraLateral>
            </BotaoItemBarraLateral>
          </Tooltip>
        ))}
      </MenuBarraLateral>
    </ConteinerBarraLateral>
  );
};

export default BarraLateral;
