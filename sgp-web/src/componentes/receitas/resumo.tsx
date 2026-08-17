import { Stack } from '@mui/material';
import Resumo from '@/componentes/ui/resumo';
import { formatarMoedaDeCentavos } from '@/mocks/receitas-paes-mock';
import { formatarMoeda, formatarTempo } from './lista';
import { mensagens } from '@/constantes/mensagens';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import type { Receita } from '@/tipos/receita';

interface PropriedadesResumoReceita {
  receita: Receita;
}

const ResumoReceita = ({ receita }: PropriedadesResumoReceita) => {
  return (
    <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
      <Resumo
        icon={<AttachMoneyIcon fontSize="small" />}
        label={mensagens.pages.recipes.salePrice}
        value={formatarMoedaDeCentavos(receita.precoVenda)}
      />
      <Resumo
        icon={<Inventory2Icon fontSize="small" />}
        label={mensagens.pages.recipes.recipeCost}
        value={formatarMoeda(receita.precoPorReceita ?? 0)}
      />
      <Resumo
        icon={<AttachMoneyIcon fontSize="small" />}
        label={mensagens.pages.recipes.costPerUnit}
        value={formatarMoeda(receita.precoPorUnidade ?? 0)}
      />
      <Resumo
        icon={<AccessTimeIcon fontSize="small" />}
        label={mensagens.pages.recipes.preparation}
        value={formatarTempo(receita.tempoPreparacao)}
      />
    </Stack>
  );
};

export default ResumoReceita;
