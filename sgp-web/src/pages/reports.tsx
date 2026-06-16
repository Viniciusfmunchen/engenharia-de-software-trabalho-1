import Container from '@/components/ui/container';
import { messages } from '@/constants/messages';
import PageLayout from '@/layouts/page';
import { Typography } from '@mui/material';

const Reports = () => {
  return (
    <PageLayout title={messages.pages.reports.title}>
      <Container>
        <Typography variant="body2" color="text.secondary">
          {messages.pages.reports.placeholder}
        </Typography>
      </Container>
    </PageLayout>
  );
};

export default Reports;
