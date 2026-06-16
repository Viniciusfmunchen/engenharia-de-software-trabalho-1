import { FormSelectField, FormTextField } from '@/components/forms/fields';
import FormModal from '@/components/forms/form-modal';
import { paymentMethodOptions, type FormOption } from '@/constants/formOptions';
import { messages } from '@/constants/messages';
import { counterCustomerName } from '@/mock/entitiesMock';
import { saleSchema, type SaleFormInput, type SaleFormValues } from '@/schemas/bakerySchemas';
import type { BreadRecipe, Customer } from '@/types/bakery';
import { getTodayInputValue } from '@/utils/date';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface SaleFormModalProps {
  open: boolean;
  recipes: BreadRecipe[];
  customers: Customer[];
  onClose: () => void;
  onSubmit: (values: SaleFormValues) => void;
}

const getDefaultValues = (recipes: BreadRecipe[]): SaleFormInput => ({
  date: getTodayInputValue(),
  buyerName: counterCustomerName,
  recipeId: recipes[0]?.id ?? 0,
  quantity: 1,
  paymentMethod: 'Pix',
});

const SaleFormModal = ({ open, recipes, customers, onClose, onSubmit }: SaleFormModalProps) => {
  const defaultValues = getDefaultValues(recipes);
  const recipeOptions: FormOption<number>[] = recipes.map((recipe) => ({
    value: recipe.id,
    label: recipe.name,
  }));
  const customerOptions: FormOption<string>[] = customers.map((customer) => ({
    value: customer.name,
    label: customer.name,
  }));
  const form = useForm<SaleFormInput, unknown, SaleFormValues>({
    resolver: zodResolver(saleSchema),
    defaultValues,
  });

  const handleClose = () => {
    form.reset(defaultValues);
    onClose();
  };

  const handleSubmit = (values: SaleFormValues) => {
    onSubmit(values);
    handleClose();
  };

  return (
    <FormModal
      open={open}
      title={messages.forms.sale.title}
      form={form}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <FormTextField<SaleFormInput>
          name="date"
          label={messages.common.date}
          type="date"
          size="small"
          fullWidth
          autoFocus
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <FormSelectField<SaleFormInput>
          name="paymentMethod"
          label={messages.forms.sale.paymentMethod}
          options={paymentMethodOptions}
          size="small"
          fullWidth
        />
      </Stack>

      <FormSelectField<SaleFormInput>
        name="buyerName"
        label={messages.forms.sale.customer}
        options={customerOptions}
        size="small"
        fullWidth
      />

      <FormSelectField<SaleFormInput>
        name="recipeId"
        label={messages.forms.sale.bread}
        options={recipeOptions}
        size="small"
        fullWidth
      />

      <FormTextField<SaleFormInput>
        name="quantity"
        label={messages.common.quantity}
        type="number"
        size="small"
        fullWidth
        slotProps={{ htmlInput: { min: 1, step: 1 } }}
      />
    </FormModal>
  );
};

export default SaleFormModal;
