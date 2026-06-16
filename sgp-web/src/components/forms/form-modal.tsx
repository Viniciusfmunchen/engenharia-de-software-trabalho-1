import AppModal from '@/components/ui/modal';
import { messages } from '@/constants/messages';
import { bakeryColors } from '@/theme';
import { Button, Stack } from '@mui/material';
import {
  FormProvider,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';
import type { ReactNode } from 'react';

interface FormModalProps<
  TFieldValues extends FieldValues,
  TTransformedValues extends FieldValues = TFieldValues,
> {
  open: boolean;
  title: string;
  form: UseFormReturn<TFieldValues, unknown, TTransformedValues>;
  children: ReactNode;
  onClose: () => void;
  onSubmit: SubmitHandler<TTransformedValues>;
  submitLabel?: string;
  maxWidth?: 'sm' | 'md' | 'lg';
}

const FormModal = <
  TFieldValues extends FieldValues,
  TTransformedValues extends FieldValues = TFieldValues,
>({
  open,
  title,
  form,
  children,
  onClose,
  onSubmit,
  submitLabel = messages.common.save,
  maxWidth = 'md',
}: FormModalProps<TFieldValues, TTransformedValues>) => (
  <AppModal open={open} onClose={onClose} title={title} maxWidth={maxWidth}>
    <FormProvider {...form}>
      <Stack component="form" spacing={2} noValidate onSubmit={form.handleSubmit(onSubmit)}>
        {children}

        <Stack direction="row" sx={{ justifyContent: 'flex-end', gap: 1, pt: 1 }}>
          <Button type="button" variant="outlined" onClick={onClose}>
            {messages.common.cancel}
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={form.formState.isSubmitting}
            sx={{
              bgcolor: bakeryColors.sidebar,
              color: bakeryColors.textLight,
              '&:hover': { bgcolor: bakeryColors.sidebarSelectedHover },
            }}
          >
            {submitLabel}
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  </AppModal>
);

export default FormModal;
