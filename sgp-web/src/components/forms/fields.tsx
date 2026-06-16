import { FormControlLabel, Switch, TextField, type TextFieldProps } from '@mui/material';
import { Controller, useFormContext, type FieldPath, type FieldValues } from 'react-hook-form';
import type { FormOption } from '@/constants/formOptions';

type FormTextFieldProps<T extends FieldValues> = Omit<TextFieldProps, 'name'> & {
  name: FieldPath<T>;
};

interface FormSelectFieldProps<T extends FieldValues>
  extends Omit<TextFieldProps, 'name' | 'select'> {
  name: FieldPath<T>;
  options: FormOption[];
}

interface FormSwitchFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
}

export const FormTextField = <T extends FieldValues,>({
  name,
  helperText,
  ...props
}: FormTextFieldProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...props}
          value={field.value ?? ''}
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message ?? helperText}
        />
      )}
    />
  );
};

export const FormSelectField = <T extends FieldValues,>({
  name,
  options,
  helperText,
  ...props
}: FormSelectFieldProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...props}
          select
          value={field.value ?? ''}
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message ?? helperText}
          slotProps={{
            select: {
              native: true,
            },
            ...props.slotProps,
          }}
        >
          {options.map((option) => (
            <option key={String(option.value)} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      )}
    />
  );
};

export const FormSwitchField = <T extends FieldValues,>({
  name,
  label,
}: FormSwitchFieldProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          control={<Switch checked={Boolean(field.value)} onChange={field.onChange} />}
          label={label}
        />
      )}
    />
  );
};
