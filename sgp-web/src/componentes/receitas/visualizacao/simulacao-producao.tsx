import { mensagens } from '@/constantes/mensagens';
import { Button, Stack, TextField, Typography } from '@mui/material';

const SimulacaoProducao = () => {
  return (
    <Stack sx={{ gap: 2 }}>
      <Typography variant="h6" color="text.secondary">
        {mensagens.simulation.title}
      </Typography>
      <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
        <TextField
          size="small"
          label={mensagens.simulation.batches}
          variant="outlined"
          type="number"
          defaultValue={1}
          slotProps={{ htmlInput: { min: 1 } }}
        />
        <Button variant="contained" color="primary" onClick={() => {}}>
          {mensagens.actions.simulateProduction}
        </Button>
      </Stack>
    </Stack>
  );
};

export default SimulacaoProducao;
