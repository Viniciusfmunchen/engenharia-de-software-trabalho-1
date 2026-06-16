import RecipeTable from '@/components/bread/table';
import Container from '@/components/ui/container';
import { bakeryColors } from '@/theme';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const formatDate = (date: string) => {
  if (!date) return '';

  return new Date(`${date}T00:00:00`).toLocaleDateString('pt-BR');
};

const BreadsTab = () => {
  const [startDate, setStartDate] = useState('2026-01-01');
  const [endDate, setEndDate] = useState('2026-12-31');

  const handleGenerateReport = () => {
    console.log({
      startDate,
      endDate,
    });
  };

  return (
    <Stack spacing={2}>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          alignItems: { xs: 'stretch', md: 'center' },
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            gap: 1.5,
            alignItems: { xs: 'stretch', sm: 'center' },
          }}
        >
          <TextField
            label="Data inicial"
            type="date"
            size="small"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />

          <TextField
            label="Data final"
            type="date"
            size="small"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Stack>
        <Button
          variant="contained"
          startIcon={<AssessmentIcon />}
          onClick={handleGenerateReport}
          disabled={!startDate || !endDate}
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
          Gerar relatório
        </Button>
      </Stack>
      <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
        <Stack sx={{ gap: 1, flex: 1, minWidth: 240 }}>
          <Container sx={{ flex: 1 }}>
            <Typography variant="caption">Total vendido</Typography>
            <Typography variant="h3" color="success.main">
              R$ 11.000,50
            </Typography>
            <Typography variant="caption">Soma de vendas no periodo</Typography>
          </Container>

          <Container sx={{ flex: 1 }}>
            <Typography variant="caption">Lucro estimado</Typography>
            <Typography variant="h3" color="success.main">
              R$ 2700,00
            </Typography>
            <Typography variant="caption">Lucro estimado no periodo</Typography>
          </Container>

          <Container sx={{ flex: 1 }}>
            <Typography variant="caption">Pão mais vendido</Typography>
            <Typography variant="h3" color="success.main">
              Pão francês
            </Typography>
            <Typography variant="caption">5100 unidades</Typography>
          </Container>

          <Container sx={{ flex: 1 }}>
            <Typography variant="caption">Pão menos vendido</Typography>
            <Typography variant="h3" color="error.main">
              Pão de forma
            </Typography>
            <Typography variant="caption">700 unidades</Typography>
          </Container>

          <Container sx={{ flex: 1 }}>
            <Typography variant="caption">Pão mais lucrativo</Typography>
            <Typography variant="h3" color="success.main">
              Pão francês
            </Typography>
            <Typography variant="caption">Lucro estimado R$ 2700</Typography>
          </Container>
        </Stack>

        <Stack sx={{ flex: 3, minWidth: 420 }}>
          <RecipeTable />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BreadsTab;
