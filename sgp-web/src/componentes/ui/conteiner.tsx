import { Stack, Typography, type StackProps, type SxProps, type Theme } from '@mui/material';
import type { PropsWithChildren, ReactNode } from 'react';

interface PropriedadesConteiner extends PropsWithChildren {
  titulo?: string;
  subtitulo?: string;
  acao?: ReactNode;
  contentSx?: SxProps<Theme>;
  semEspacamento?: boolean;
  sx?: StackProps['sx'];
}

const Conteiner = ({
  titulo,
  subtitulo,
  acao,
  children,
  contentSx,
  semEspacamento = false,
  sx,
}: PropriedadesConteiner) => {
  const temCabecalho = titulo || subtitulo || acao;

  return (
    <Stack
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: '#eadfce',
        borderRadius: 2,
        overflow: 'hidden',
        ...sx,
      }}
    >
      {temCabecalho && (
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            px: 2,
            pt: 2,
            pb: semEspacamento ? 2 : 1,
          }}
        >
          <Stack>
            {titulo && (
              <Typography variant="h6" color="text.primary">
                {titulo}
              </Typography>
            )}

            {subtitulo && (
              <Typography variant="body2" color="text.secondary">
                {subtitulo}
              </Typography>
            )}
          </Stack>

          {acao}
        </Stack>
      )}

      <Stack
        sx={{
          p: semEspacamento ? 0 : 2,
          pt: temCabecalho && !semEspacamento ? 1 : semEspacamento ? 0 : 2,
          ...contentSx,
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default Conteiner;
