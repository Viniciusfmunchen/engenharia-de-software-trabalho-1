import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoedaDeCentavos } from '@/mocks/receitas-paes-mock';
import type { Receita } from '@/tipos/receita';
import { coresPadaria } from '@/tema';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { Chip, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'react-router';

export const formatarMoeda = (valor: number) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export const formatarTempo = (minutos: number) => {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;

  if (!horas) return `${minutosRestantes} min`;
  if (!minutosRestantes) return `${horas} h`;

  return `${horas} h ${minutosRestantes} min`;
};

interface PropriedadesListaReceitas {
  receitas: Receita[];
}

const ListaReceitas = ({ receitas }: PropriedadesListaReceitas) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const idReceitaSelecionada = searchParams.get('idReceita') || searchParams.get('recipeId');

  const definirReceitaSelecionada = (id: number) => {
    setSearchParams((anterior) => {
      const proximo = new URLSearchParams(anterior);
      proximo.set('idReceita', String(id));
      proximo.delete('recipeId');
      return proximo;
    });
  };

  return (
    <Stack
      sx={{
        width: { xs: '100%', lg: 420 },
        maxHeight: { lg: 'calc(100vh - 278px)' },
        overflowY: { lg: 'auto' },
        pr: { lg: 0.5 },
        gap: 1,
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          position: { lg: 'sticky' },
          top: 0,
          zIndex: 1,
          bgcolor: coresPadaria.fundoPagina,
          pb: 0.5,
          flexShrink: 0,
        }}
      >
        <Typography variant="caption" color="text.secondary">
          {receitas.length} {mensagens.pages.recipes.foundSuffix}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {mensagens.pages.recipes.selectForDetails}
        </Typography>
      </Stack>

      {receitas.map((receita) => {
        const estaSelecionada = idReceitaSelecionada === String(receita.idReceita);

        return (
          <Conteiner
            key={receita.idReceita}
            sx={{
              bgcolor: estaSelecionada ? '#fffaf2' : 'background.paper',
              borderColor: estaSelecionada ? coresPadaria.destaque : '#eadfce',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background-color 160ms ease, border-color 160ms ease',
              '&:hover': {
                bgcolor: '#fffaf2',
                borderColor: coresPadaria.destaque,
              },
            }}
          >
            <Stack
              role="button"
              tabIndex={0}
              onClick={() => definirReceitaSelecionada(receita.idReceita)}
              onKeyDown={(evento) => {
                if (evento.key === 'Enter' || evento.key === ' ') {
                  definirReceitaSelecionada(receita.idReceita);
                }
              }}
              sx={{ gap: 1, outline: 0 }}
            >
              <Stack
                direction="row"
                sx={{ alignItems: 'flex-start', justifyContent: 'space-between', gap: 1 }}
              >
                <Stack sx={{ gap: 0.5 }}>
                  <Typography variant="h6">{receita.nomeReceita}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {receita.rendimento ?? 0} {mensagens.pages.recipes.unitsPerRecipe}
                  </Typography>
                </Stack>
                <Chip size="small" label={formatarMoedaDeCentavos(receita.precoVenda)} />
              </Stack>

              <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>
                <Chip
                  size="small"
                  icon={<AccessTimeIcon />}
                  label={formatarTempo(receita.tempoPreparacao)}
                />
                <Chip
                  size="small"
                  icon={<Inventory2Icon />}
                  label={`${receita.ingredientes.length} ${mensagens.common.ingredients.toLocaleLowerCase('pt-BR')}`}
                />
              </Stack>
            </Stack>
          </Conteiner>
        );
      })}
    </Stack>
  );
};

export default ListaReceitas;
