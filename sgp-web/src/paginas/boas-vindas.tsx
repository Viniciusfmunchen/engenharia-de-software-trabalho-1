import Cartao from '@/componentes/ui/cartao';
import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import LayoutPagina from '@/layouts/pagina';
import {
  formatarMoeda,
  obterResumoCompras,
  obterResumoEstoque,
  obterResumoVendas,
} from '@/mocks/operacoes-mock';
import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const BoasVindas = () => {
  const navegar = useNavigate();
  const resumoVendas = obterResumoVendas();
  const resumoCompras = obterResumoCompras();
  const resumoEstoque = obterResumoEstoque();

  return (
    <LayoutPagina titulo={mensagens.pages.welcome.title}>
      <Stack spacing={2}>
        <Conteiner>
          <Stack spacing={1.5}>
            <Typography variant="h3">{mensagens.pages.welcome.subtitle}</Typography>
            <Typography variant="body1" color="text.secondary">
              {mensagens.pages.welcome.description}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 1 }}>
              <Button variant="contained" onClick={() => navegar('/painel')}>
                {mensagens.actions.goToDashboard}
              </Button>
              <Button variant="outlined" onClick={() => navegar('/receitas')}>
                {mensagens.actions.viewRecipes}
              </Button>
            </Stack>
          </Stack>
        </Conteiner>

        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
          <Cartao
            titulo={mensagens.nav.sales}
            conteudo={formatarMoeda(resumoVendas.revenue)}
            informacao={mensagens.pages.welcome.registeredRevenue}
          />
          <Cartao
            titulo={mensagens.nav.purchases}
            conteudo={formatarMoeda(resumoCompras.total)}
            informacao={mensagens.pages.welcome.totalPurchased}
          />
          <Cartao
            titulo={mensagens.pages.dashboard.lowStock}
            conteudo={resumoEstoque.lowStockCount.toLocaleString('pt-BR')}
            informacao={mensagens.pages.welcome.ingredientsToRestock}
          />
        </Stack>
      </Stack>
    </LayoutPagina>
  );
};

export default BoasVindas;
