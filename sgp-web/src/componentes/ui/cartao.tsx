import { Typography } from '@mui/material';
import Conteiner from './conteiner';

interface PropriedadesCartao {
  titulo: string;
  conteudo: string;
  informacao: string;
}

const Cartao = ({ titulo, conteudo, informacao }: PropriedadesCartao) => {
  return (
    <Conteiner sx={{ flex: 1 }}>
      <Typography variant="caption">{titulo}</Typography>
      <Typography variant="h3" color="success.main">
        {conteudo}
      </Typography>
      <Typography variant="caption">{informacao}</Typography>
    </Conteiner>
  );
};

export default Cartao;
