import { CampoSelecaoFormulario, CampoTextoFormulario } from '@/componentes/ui/formularios/campos';
import { mensagens } from '@/constantes/mensagens';
import type { CriarReceita } from '@/schemas/receita';
import type { Ingrediente } from '@/schemas/ingrediente';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';

interface PropriedadesListaCamposIngredientes {
  ingredientes: Ingrediente[];
}

const ListaCamposIngredientes = ({ ingredientes }: PropriedadesListaCamposIngredientes) => {
  const { control } = useFormContext<CriarReceita>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredientes',
  });

  console.log(fields)

  const adicionarIngrediente = () =>
    append({
      idIngrediente: ingredientes[0]?.idIngrediente ?? 1,
      quantidade: 1,
    });

  return (
    <Stack spacing={1}>
      <Stack
        direction="row"
        sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 1 }}
      >
        <Typography variant="h6">{mensagens.formularios.receita.secaoIngredientes}</Typography>
        <Button
          type="button"
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={adicionarIngrediente}
        >
          {mensagens.formularios.receita.adicionarIngrediente}
        </Button>
      </Stack>

      {fields.map((campo, indice) => (
        <Stack
          key={campo.idIngrediente}
          direction={{ xs: 'column', sm: 'row' }}
          sx={{ alignItems: { sm: 'flex-start' }, gap: 1 }}
        >
          <CampoSelecaoFormulario<CriarReceita>
            name={`ingredientes.${indice}.idIngrediente`}
            label={mensagens.formularios.receita.ingrediente}
            options={ingredientes.map((ingrediente) => ({
              value: ingrediente.idIngrediente,
              label: ingrediente.nomeIngrediente,
            }))}
            size="small"
            fullWidth
          />
          <CampoTextoFormulario<CriarReceita>
            name={`ingredientes.${indice}.quantidade`}
            label={mensagens.comum.quantidade}
            type="number"
            size="small"
            sx={{ width: { xs: '100%', sm: 180 } }}
            slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
          />
          <IconButton
            type="button"
            aria-label={mensagens.formularios.receita.removerIngrediente}
            onClick={() => remove(indice)}
            disabled={fields.length === 1}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}
    </Stack>
  );
};

export default ListaCamposIngredientes;
