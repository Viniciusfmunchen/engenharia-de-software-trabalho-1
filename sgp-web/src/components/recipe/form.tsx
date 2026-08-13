import { FormSelectField, FormTextField } from '@/components/forms/fields';
import FormModal from '@/components/forms/form-modal';
import type { FormOption } from '@/constants/formOptions';
import { messages } from '@/constants/messages';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { useFieldArray, useForm } from 'react-hook-form';
import type { Recipe } from '@/schemas/recipe';
import { recipeSchema } from '@/schemas/bakerySchemas';

interface RecipeFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: Recipe) => void;
}

const getDefaultValues = (): Recipe => ({
  recipeId: 0,
  name: '',
  ingredients: [],
  preparationTime: 60,
  salePrice: 12,
  yieldUnits: 20,
});

const RecipeForm = ({
  open,
  onClose,
  onSubmit,
}: RecipeFormProps) => {
  const defaultValues = getDefaultValues();
  const { data: ingredients } = use

  const form = useForm<Recipe>({
    resolver: zodResolver(recipeSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'ingredients',
  });

  const handleClose = () => {
    form.reset(defaultValues);
    onClose();
  };

  const handleSubmit = (values: Recipe) => {
    onSubmit(values);
    handleClose();
  };

  const addIngredient = () =>
    append({
      ingredientId: ingredients[0]?.id ?? 0,
      quantity: 1,
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
        name="name"
        label={messages.forms.recipe.name}
        size="small"
        autoFocus
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <FormTextField<BreadRecipeFormInput>
          name="salePrice"
          label={messages.forms.recipe.salePrice}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
        <FormTextField<BreadRecipeFormInput>
          name="yieldUnits"
          label={messages.forms.recipe.yieldUnits}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 1, step: 1 } }}
        />
        <FormTextField<BreadRecipeFormInput>
          name="preparationTimeMinutes"
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
            <FormSelectField<BreadRecipeFormInput>
              name={`ingredients.${index}.ingredientId`}
              label={messages.forms.recipe.ingredient}
              options={ingredientOptions}
              size="small"
              fullWidth
            />
            <FormTextField<BreadRecipeFormInput>
              name={`ingredients.${index}.quantity`}
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

export default RecipeForm;
