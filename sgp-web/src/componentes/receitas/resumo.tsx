import { Stack } from '@mui/material';
import Resumo from '@/componentes/ui/resumo';
import { mensagens } from '@/constantes/mensagens';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import type { Receita } from '@/schemas/receita';
import { formatarMoeda } from '@/utils/formatar-moeda';
import { formatarTempo } from '@/utils/formatar-tempo';

interface PropriedadesResumoReceita {
  receita: Receita;
}

const ResumoReceita = ({ receita }: PropriedadesResumoReceita) => {
  return (
    <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
      <Resumo
        icon={<Inventory2Icon fontSize="small" />}
        label={mensagens.paginas.receitas.custoReceita}
        value={formatarMoeda(receita.custoPorReceita ?? 0)}
      />
      <Resumo
        icon={<AttachMoneyIcon fontSize="small" />}
        label={mensagens.paginas.receitas.custoPorUnidade}
        value={formatarMoeda(receita.custoPorUnidade ?? 0)}
      />
      <Resumo
        icon={<AccessTimeIcon fontSize="small" />}
        label={mensagens.paginas.receitas.preparo}
        value={formatarTempo(receita.tempoPreparo)}
      />
    </Stack>
  );
};

export default ResumoReceita;
