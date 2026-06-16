import { FormSelectField, FormTextField } from '@/components/forms/fields';
import FormModal from '@/components/forms/form-modal';
import { purchaseStatusOptions, type FormOption } from '@/constants/formOptions';
import { messages } from '@/constants/messages';
import {
  purchaseSchema,
  type PurchaseFormInput,
  type PurchaseFormValues,
} from '@/schemas/bakerySchemas';
import type { Ingredient, Supplier } from '@/types/bakery';
import { getTodayInputValue } from '@/utils/date';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface PurchaseFormModalProps {
  open: boolean;
  ingredients: Ingredient[];
  suppliers: Supplier[];
  onClose: () => void;
  onSubmit: (values: PurchaseFormValues) => void;
}

const getDefaultValues = (ingredients: Ingredient[], suppliers: Supplier[]): PurchaseFormInput => ({
  date: getTodayInputValue(),
  supplierName: suppliers[0]?.name ?? '',
  ingredientId: ingredients[0]?.id ?? 0,
  quantity: 0,
  unitCost: ingredients[0]?.costPerUnit ?? 0,
  status: 'Recebida',
});

const PurchaseFormModal = ({
  open,
  ingredients,
  suppliers,
  onClose,
  onSubmit,
}: PurchaseFormModalProps) => {
  const defaultValues = getDefaultValues(ingredients, suppliers);
  const ingredientOptions: FormOption<number>[] = ingredients.map((ingredient) => ({
    value: ingredient.id,
    label: ingredient.name,
  }));
  const supplierOptions: FormOption<string>[] = suppliers.map((supplier) => ({
    value: supplier.name,
    label: supplier.name,
  }));
  const form = useForm<PurchaseFormInput, unknown, PurchaseFormValues>({
    resolver: zodResolver(purchaseSchema),
    defaultValues,
  });

  const handleClose = () => {
    form.reset(defaultValues);
    onClose();
  };

  const handleSubmit = (values: PurchaseFormValues) => {
    onSubmit(values);
    handleClose();
  };

  return (
    <FormModal
      open={open}
      title={messages.forms.purchase.title}
      form={form}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <FormTextField<PurchaseFormInput>
          name="date"
          label={messages.common.date}
          type="date"
          size="small"
          fullWidth
          autoFocus
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <FormSelectField<PurchaseFormInput>
          name="status"
          label={messages.common.status}
          options={purchaseStatusOptions}
          size="small"
          fullWidth
        />
      </Stack>

      <FormSelectField<PurchaseFormInput>
        name="supplierName"
        label={messages.forms.purchase.supplierName}
        options={supplierOptions}
        size="small"
        fullWidth
      />

      <FormSelectField<PurchaseFormInput>
        name="ingredientId"
        label={messages.forms.purchase.ingredient}
        options={ingredientOptions}
        size="small"
        fullWidth
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <FormTextField<PurchaseFormInput>
          name="quantity"
          label={messages.common.quantity}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.01' } }}
        />
        <FormTextField<PurchaseFormInput>
          name="unitCost"
          label={messages.forms.purchase.unitCost}
          type="number"
          size="small"
          fullWidth
          slotProps={{ htmlInput: { min: 0, step: '0.0001' } }}
        />
      </Stack>
    </FormModal>
  );
};

export default PurchaseFormModal;
