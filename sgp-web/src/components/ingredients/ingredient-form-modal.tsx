import { FormSelectField, FormTextField } from '@/components/forms/fields';
import FormModal from '@/components/forms/form-modal';
import {
  ingredientCategoryOptions,
  ingredientUnitOptions,
} from '@/constants/formOptions';
import { messages } from '@/constants/messages';
import {
  ingredientSchema,
  type IngredientFormInput,
  type IngredientFormValues,
} from '@/schemas/bakerySchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface IngredientFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: IngredientFormValues) => void;
}

const defaultValues: IngredientFormInput = {
  name: '',
  category: 'farinha',
  unit: 'g',
  costPerUnit: 0,
  stockQuantity: 0,
  minStockQuantity: 0,
};

const IngredientFormModal = ({ open, onClose, onSubmit }: IngredientFormModalProps) => {
  const form = useForm<IngredientFormInput, unknown, IngredientFormValues>({
    resolver: zodResolver(ingredientSchema),
    defaultValues,
  });

  const handleClose = () => {
    form.reset(defaultValues);
    onClose();
  };

  const handleSubmit = (values: IngredientFormValues) => {
    onSubmit(values);
    handleClose();
  };

  return (
    <FormModal
      open={open}
      title={messages.forms.ingredient.title}
      form={form}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <FormTextField<IngredientFormInput>
        name="name"
        label={messages.forms.ingredient.name}
        size="small"
        autoFocus
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <FormSelectField<IngredientFormInput>
          name="category"
          label={messages.forms.ingredient.category}
          options={ingredientCategoryOptions}
          size="small"
          fullWidth
        />
        <FormSelectField<IngredientFormInput>
          name="unit"
          label={messages.forms.ingredient.unit}
          options={ingredientUnitOptions}
          size="small"
          fullWidth
        />
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <FormTextField<IngredientFormInput>
          name="costPerUnit"
          label={messages.forms.ingredient.costPerUnit}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.0001' } }}
        />
        <FormTextField<IngredientFormInput>
          name="stockQuantity"
          label={messages.forms.ingredient.stockQuantity}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
        <FormTextField<IngredientFormInput>
          name="minStockQuantity"
          label={messages.forms.ingredient.minStockQuantity}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
      </Stack>
    </FormModal>
  );
};

export default IngredientFormModal;
