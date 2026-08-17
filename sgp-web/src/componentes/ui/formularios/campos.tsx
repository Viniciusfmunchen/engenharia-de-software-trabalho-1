import { FormControlLabel, Switch, TextField, type TextFieldProps } from '@mui/material';
import { Controller, useFormContext, type FieldPath, type FieldValues } from 'react-hook-form';
import type { OpcaoFormulario } from '@/constantes/opcoes-formulario';

type PropriedadesCampoTexto<T extends FieldValues> = Omit<TextFieldProps, 'name'> & {
  name: FieldPath<T>;
};

interface PropriedadesCampoSelecao<T extends FieldValues>
  extends Omit<TextFieldProps, 'name' | 'select'> {
  name: FieldPath<T>;
  options: OpcaoFormulario[];
}

interface PropriedadesCampoAlternador<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
}

export const CampoTextoFormulario = <T extends FieldValues>({
  name,
  helperText,
  ...props
}: PropriedadesCampoTexto<T>) => {
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

export const CampoSelecaoFormulario = <T extends FieldValues>({
  name,
  options,
  helperText,
  ...props
}: PropriedadesCampoSelecao<T>) => {
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
          {options.map((opcao) => (
            <option key={String(opcao.value)} value={opcao.value}>
              {opcao.label}
            </option>
          ))}
        </TextField>
      )}
    />
  );
};

export const CampoAlternadorFormulario = <T extends FieldValues>({
  name,
  label,
}: PropriedadesCampoAlternador<T>) => {
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

// Aliases para compatibilidade
export const FormTextField = CampoTextoFormulario;
export const FormSelectField = CampoSelecaoFormulario;
export const FormSwitchField = CampoAlternadorFormulario;
