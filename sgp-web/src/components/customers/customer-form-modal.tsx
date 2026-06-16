import { FormTextField } from '@/components/forms/fields';
import FormModal from '@/components/forms/form-modal';
import { messages } from '@/constants/messages';
import { customerSchema, type CustomerFormValues } from '@/schemas/bakerySchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface CustomerFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: CustomerFormValues) => void;
}

const defaultValues: CustomerFormValues = {
  name: '',
  document: '',
  phone: '',
};

const CustomerFormModal = ({ open, onClose, onSubmit }: CustomerFormModalProps) => {
  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(customerSchema),
    defaultValues,
  });

  const handleClose = () => {
    form.reset(defaultValues);
    onClose();
  };

  const handleSubmit = (values: CustomerFormValues) => {
    onSubmit(values);
    handleClose();
  };

  return (
    <FormModal
      open={open}
      title={messages.forms.customer.title}
      form={form}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <FormTextField<CustomerFormValues>
        name="name"
        label={messages.forms.customer.name}
        size="small"
        fullWidth
        autoFocus
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <FormTextField<CustomerFormValues>
          name="document"
          label={messages.forms.customer.document}
          size="small"
          fullWidth
        />
        <FormTextField<CustomerFormValues>
          name="phone"
          label={messages.forms.customer.phone}
          size="small"
          fullWidth
        />
      </Stack>
    </FormModal>
  );
};

export default CustomerFormModal;
