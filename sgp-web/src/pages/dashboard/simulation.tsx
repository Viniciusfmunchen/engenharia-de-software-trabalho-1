import Container from '@/components/ui/container';
import { bakeryColors } from '@/theme';
import { Button, Stack, TextField, Typography } from '@mui/material'

const SimulationTab = () => {
  return (
    <Stack sx={{ gap: 2 }}>
      <Typography variant='h3'>Parâmetros da simulação</Typography>
      <Stack direction='row' sx={{ gap: 2, justifyContent: 'center', alignItems: 'center' }}>
        <TextField fullWidth size='small' label="Tipo de pão" />
        <TextField fullWidth size='small' label="Quantidade" />
        <TextField fullWidth size='small' label="Dia de produção" />
        <Stack sx={{ width: '100%' }}>
          <Button
            variant="contained"
            sx={{
              minHeight: 40,
              bgcolor: bakeryColors.sidebar,
              color: '#fff7ed',
              boxShadow: 'none',
              textTransform: 'none',

              '&:hover': {
                bgcolor: '#7a6251',
                boxShadow: 'none',
              },
            }}
          >
            Simular Produção
          </Button>
        </Stack>
      </Stack>
      <Container>
        Insira os dados e confirme para ver os resultados da simulação, incluindo o impacto no estoque, vendas e lucro estimado.
      </Container>

    </Stack>
  )
}

export default SimulationTab;
