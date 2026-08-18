import Conteiner from '@/componentes/ui/conteiner';
import { mensagens } from '@/constantes/mensagens';
import { formatarMoeda } from '@/utils/formatar-moeda';
import type { Receita } from '@/schemas/receita';
import { coresPadaria } from '@/tema';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { Chip, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'react-router';
import { formatarTempo } from '@/utils/formatar-tempo';
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
          {receitas.length} {mensagens.paginas.receitas.sufixoEncontradas}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {mensagens.paginas.receitas.selecioneParaDetalhes}
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
                    {receita.rendimento ?? 0} {mensagens.paginas.receitas.unidadesPorReceita}
                  </Typography>
                </Stack>
                <Chip size="small" label={formatarMoeda(receita.precoVenda)} />
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
                  label={`${receita.ingredientes.length} ${mensagens.comum.ingredientes.toLocaleLowerCase('pt-BR')}`}
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
