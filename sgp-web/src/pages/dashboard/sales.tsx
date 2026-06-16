import RecipeTable from '@/components/bread/table';
import SalesTable from '@/components/sales/table';
import Container from '@/components/ui/container';
import { bakeryColors } from '@/theme';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const formatDate = (date: string) => {
  if (!date) return '';

  return new Date(`${date}T00:00:00`).toLocaleDateString('pt-BR');
};

const SalesTab = () => {
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

        </Stack>
        <Stack sx={{ flex: 3, minWidth: 420 }}>
          <SalesTable />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SalesTab;
