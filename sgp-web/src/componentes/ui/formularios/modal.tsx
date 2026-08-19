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
  TValoresCampos extends FieldValues
> {
  aberto?: boolean;
  titulo?: string;
  formulario?: UseFormReturn<TValoresCampos>;
  children: ReactNode;
  aoFechar?: () => void;
  aoSubmeter?: SubmitHandler<TValoresCampos>;
  rotuloSubmissao?: string;
  larguraMaxima?: 'sm' | 'md' | 'lg';
}

const ModalFormulario = <
  TValoresCampos extends FieldValues,
>({
  aberto,
  titulo,
  formulario,
  children,
  aoFechar,
  aoSubmeter,
  rotuloSubmissao,
  larguraMaxima,
}: PropriedadesModalFormulario<TValoresCampos>) => {
  const estaAberto = aberto ?? false;
  const textoTitulo = titulo ?? '';
  const fechar = aoFechar ?? (() => { });
  const submeter = aoSubmeter ?? (() => { });
  const instanciaFormulario = formulario!;
  const textoBotao = rotuloSubmissao ?? mensagens.comum.salvar;
  const tamanho = larguraMaxima ?? 'md';

  return (
    <ModalApp aberto={estaAberto} aoFechar={fechar} titulo={textoTitulo} larguraMaxima={tamanho}>
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
              {mensagens.comum.cancelar}
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
