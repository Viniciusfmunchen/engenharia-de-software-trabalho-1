import ModalApp from '@/componentes/ui/modal';
import { mensagens } from '@/constantes/mensagens';
import { coresPadaria } from '@/tema';
import { Button, Stack } from '@mui/material';
import {
  FormProvider,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';
import type { ReactNode } from 'react';

interface PropriedadesModalFormulario<
  TValoresCampos extends FieldValues,
  TValoresTransformados extends FieldValues = TValoresCampos,
> {
  aberto?: boolean;
  open?: boolean;
  titulo?: string;
  title?: string;
  formulario?: UseFormReturn<TValoresCampos, unknown, TValoresTransformados>;
  form?: UseFormReturn<TValoresCampos, unknown, TValoresTransformados>;
  children: ReactNode;
  aoFechar?: () => void;
  onClose?: () => void;
  aoSubmeter?: SubmitHandler<TValoresTransformados>;
  onSubmit?: SubmitHandler<TValoresTransformados>;
  rotuloSubmissao?: string;
  submitLabel?: string;
  larguraMaxima?: 'sm' | 'md' | 'lg';
  maxWidth?: 'sm' | 'md' | 'lg';
}

const ModalFormulario = <
  TValoresCampos extends FieldValues,
  TValoresTransformados extends FieldValues = TValoresCampos,
>({
  aberto,
  open,
  titulo,
  title,
  formulario,
  form,
  children,
  aoFechar,
  onClose,
  aoSubmeter,
  onSubmit,
  rotuloSubmissao,
  submitLabel = mensagens.common.save,
  larguraMaxima,
  maxWidth = 'md',
}: PropriedadesModalFormulario<TValoresCampos, TValoresTransformados>) => {
  const estaAberto = aberto ?? open ?? false;
  const textoTitulo = titulo ?? title ?? '';
  const fechar = aoFechar ?? onClose ?? (() => {});
  const submeter = aoSubmeter ?? onSubmit ?? (() => {});
  const instanciaFormulario = (formulario ?? form)!;
  const textoBotao = rotuloSubmissao ?? submitLabel;
  const tamanho = larguraMaxima ?? maxWidth;

  return (
    <ModalApp open={estaAberto} onClose={fechar} title={textoTitulo} maxWidth={tamanho}>
      <FormProvider {...instanciaFormulario}>
        <Stack
          component="form"
          spacing={2}
          noValidate
          onSubmit={instanciaFormulario.handleSubmit(submeter)}
        >
          {children}

          <Stack direction="row" sx={{ justifyContent: 'flex-end', gap: 1, pt: 1 }}>
            <Button type="button" variant="outlined" onClick={fechar}>
              {mensagens.common.cancel}
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={instanciaFormulario.formState.isSubmitting}
              sx={{
                bgcolor: coresPadaria.barraLateral,
                color: coresPadaria.textoClaro,
                '&:hover': { bgcolor: coresPadaria.barraLateralSelecionadaHover },
              }}
            >
              {textoBotao}
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </ModalApp>
  );
};

export default ModalFormulario;
