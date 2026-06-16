import { Typography } from '@mui/material';
import Container from './container';

interface CardProps {
  title: string;
  content: string;
  info: string;
}

const Card = ({ title, content, info }: CardProps) => {
  return (
    <Container sx={{ flex: 1 }}>
      <Typography variant="caption">{title}</Typography>
      <Typography variant="h3" color="success.main">
        {content}
      </Typography>
      <Typography variant="caption">{info}</Typography>
    </Container>
  );
};

export default Card;
