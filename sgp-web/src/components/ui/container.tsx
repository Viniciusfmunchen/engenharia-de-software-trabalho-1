import { Stack, Typography, type StackProps, type SxProps, type Theme } from '@mui/material';
import type { PropsWithChildren, ReactNode } from 'react';

interface ContainerProps extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  contentSx?: SxProps<Theme>;
  noPadding?: boolean;
  sx?: StackProps['sx'];
}

const Container = ({
  title,
  subtitle,
  action,
  children,
  contentSx,
  noPadding = false,
  sx,
}: ContainerProps) => {
  const hasHeader = title || subtitle || action;

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
      {hasHeader && (
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            px: 2,
            pt: 2,
            pb: noPadding ? 2 : 1,
          }}
        >
          <Stack>
            {title && (
              <Typography variant="h6" color="text.primary">
                {title}
              </Typography>
            )}

            {subtitle && (
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Stack>

          {action}
        </Stack>
      )}

      <Stack
        sx={{
          p: noPadding ? 0 : 2,
          pt: hasHeader && !noPadding ? 1 : noPadding ? 0 : 2,
          ...contentSx,
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default Container;
