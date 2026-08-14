import { FormSelectField, FormTextField } from '@/components/forms/fields';
import FormModal from '@/components/forms/form-modal';
import { messages } from '@/constants/messages';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { useFieldArray, useForm } from 'react-hook-form';
import { criarReceitaSchema, type CriarReceita, type Receita } from '@/schemas/recipe';
import { useGetPageable } from '@/hooks/query';
import { ENDPOINTS } from '@/constants/endpoints';
import type { Ingrediente } from '@/schemas/ingredient';
import { usePost } from '@/hooks/mutation';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: CriarReceita) => void;
}

const getDefaultValues = (): CriarReceita => ({
  nomeReceita: '',
  rendimento: 0,
  tempoPreparacao: 0,
  precoVenda: 0,
  ingredientes: [],
});

const FormularioReceita = ({
  open,
  onClose,
  onSubmit,
}: Props) => {
  const defaultValues = getDefaultValues();
  const { data: ingredientes } = useGetPageable<Ingrediente>({ endpoint: ENDPOINTS.INGREDIENTE.BASE })

  const queryClient = useQueryClient();

  const criarReceitaMutation = usePost<Receita, CriarReceita>({
    onSuccess: (dadosCriados) => {
      console.log('Receita criada com sucesso:', dadosCriados);
      queryClient.invalidateQueries({ queryKey: [ENDPOINTS.RECEITA.BASE] });
    },
    onError: (erro) => {
      console.error('Erro ao salvar receita:', erro);
    }
  });

  const form = useForm<CriarReceita>({
    resolver: zodResolver(criarReceitaSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'ingredientes',
  });

  const handleClose = () => {
    form.reset(defaultValues);
    onClose();
  };

  const handleSubmit = (values: CriarReceita) => {
    criarReceitaMutation.mutate({ endpoint: ENDPOINTS.RECEITA.BASE, payload: values })
    handleClose();
  };

  const addIngredient = () =>
    append({
      idIngrediente: ingredientes[0]?.idIngrediente ?? 0,
      quantidade: 1,
    });

  return (
    <FormModal
      open={open}
      title={messages.forms.recipe.title}
      form={form}
      onClose={handleClose}
      onSubmit={handleSubmit}
      maxWidth="lg"
    >
      <FormTextField
        name="nomeReceita"
        label={messages.forms.recipe.name}
        size="small"
        autoFocus
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <FormTextField
          name="precoVenda"
          label={messages.forms.recipe.salePrice}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
        <FormTextField
          name="rendimento"
          label={messages.forms.recipe.yieldUnits}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 1, step: 1 } }}
        />
        <FormTextField
          name="tempoPreparacao"
          label={messages.forms.recipe.preparationTimeMinutes}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 1, step: 1 } }}
        />
      </Stack>

      <Stack spacing={1}>
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
          <Typography variant="h6">{messages.forms.recipe.ingredientsSection}</Typography>
          <Button type="button" variant="outlined" startIcon={<AddIcon />} onClick={addIngredient}>
            {messages.forms.recipe.addIngredient}
          </Button>
        </Stack>

        {fields.map((field, index) => (
          <Stack
            key={field.id}
            direction={{ xs: 'column', sm: 'row' }}
            sx={{ alignItems: { sm: 'flex-start' }, gap: 1 }}
          >
            <FormSelectField
              name={`ingredientes.${index}.ingredientId`}
              label={messages.forms.recipe.ingredient}
              options={ingredientes.map((ingrediente) => ({ value: ingrediente.idIngrediente, label: ingrediente.nomeIngrediente }))}
              size="small"
              fullWidth
            />
            <FormTextField
              name={`ingredientes.${index}.quantidade`}
              label={messages.common.quantity}
              type="number"
              size="small"
              sx={{ width: { xs: '100%', sm: 180 } }}
              slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
            />
            <IconButton
              type="button"
              aria-label={messages.forms.recipe.removeIngredient}
              onClick={() => remove(index)}
              disabled={fields.length === 1}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        ))}
      </Stack>
    </FormModal>
  );
};

export default FormularioReceita;
