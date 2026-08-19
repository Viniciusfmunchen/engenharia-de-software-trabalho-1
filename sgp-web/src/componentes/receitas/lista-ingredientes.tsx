import type { IngredienteReceita } from '@/schemas/ingrediente';
import { IconButton, Stack, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

export const ListaIngredientesReceita = ({
  ingredientes,
  onExcluir,
}: {
  ingredientes: IngredienteReceita[];
  onExcluir?: (idIngrediente: number) => void;
}) => {
  return (
    <Stack component="ul" sx={{ gap: 2, listStyle: 'none', p: 0 }}>
      {ingredientes.map((ingrediente) => (
        <Stack
          key={ingrediente.idIngrediente}
          component="li"
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            justifyContent: 'space-between',
            gap: 1,
            borderBottom: '1px solid #f1e7d8',
            py: 1,
            alignItems: 'center',
          }}
        >
          <Stack>
            <Typography variant="body1">{ingrediente.nomeIngrediente}</Typography>
            <Typography variant="caption" color="text.secondary">
              {ingrediente.categoriaIngrediente?.nomeCategoria || ''}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <Typography variant="subtitle2">
              {ingrediente.quantidade.toLocaleString('pt-BR')}{' '}
              {ingrediente.unidadeMedida?.abreviacao || ''}
            </Typography>
            {onExcluir && (
              <IconButton size="small" color="error" onClick={() => onExcluir(ingrediente.idIngrediente)}>
                <Delete fontSize="small" />
              </IconButton>
            )}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export const RecipeIngredientsList = ListaIngredientesReceita;
