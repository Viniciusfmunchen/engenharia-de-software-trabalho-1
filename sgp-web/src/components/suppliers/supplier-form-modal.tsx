import { FormTextField } from '@/components/forms/fields';
import FormModal from '@/components/forms/form-modal';
import { messages } from '@/constants/messages';
import { supplierSchema, type SupplierFormValues } from '@/schemas/bakerySchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

interface SupplierFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: SupplierFormValues) => void;
}

const defaultValues: SupplierFormValues = {
  name: '',
  document: '',
  phone: '',
  contactName: '',
};

const SupplierFormModal = ({ open, onClose, onSubmit }: SupplierFormModalProps) => {
  const form = useForm<SupplierFormValues>({
    resolver: zodResolver(supplierSchema),
    defaultValues,
  });

  const handleClose = () => {
    form.reset(defaultValues);
    onClose();
  };

  const handleSubmit = (values: SupplierFormValues) => {
    onSubmit(values);
    handleClose();
  };

  return (
    <FormModal
      open={open}
      title={messages.forms.supplier.title}
      form={form}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <FormTextField<SupplierFormValues>
        name="name"
        label={messages.forms.supplier.name}
        size="small"
        fullWidth
        autoFocus
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
        <FormTextField<SupplierFormValues>
          name="document"
          label={messages.forms.supplier.document}
          size="small"
          fullWidth
        />
        <FormTextField<SupplierFormValues>
          name="phone"
          label={messages.forms.supplier.phone}
          size="small"
          fullWidth
        />
      </Stack>

      <FormTextField<SupplierFormValues>
        name="contactName"
        label={messages.forms.supplier.contactName}
        size="small"
        fullWidth
      />
    </FormModal>
  );
};

export default SupplierFormModal;
