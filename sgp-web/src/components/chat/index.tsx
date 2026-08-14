/* import { type FormEvent, useEffect, useRef, useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Divider,
  Fab,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useAssistantChat } from '../../hooks/use-assistant-chat';

type ChatMessage = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  intent?: string;
};

const suggestions = ['Consultar estoque', 'Ver vendas de hoje', 'Ajuda com receitas'];

const initialMessage: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: 'Ol?! Sou o assistente do SGP. Como posso ajudar voc? hoje?',
};

function createMessage(role: ChatMessage['role'], content: string, intent?: string): ChatMessage {
  return { id: crypto.randomUUID(), role, content, intent };
}

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const chatMutation = useAssistantChat({
    onSuccess: (response) => {
      setMessages((current) => [
        ...current,
        createMessage('assistant', response.message, response.intent),
      ]);
    },
    onError: () => {
      setMessages((current) => [
        ...current,
        createMessage(
          'assistant',
          'N?o foi poss?vel responder agora. Verifique a conex?o com o servidor e tente novamente.',
        ),
      ]);
    },
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [isOpen, messages, chatMutation.isPending]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = input.trim();

    if (!message || chatMutation.isPending) {
      return;
    }

    setMessages((current) => [...current, createMessage('user', message)]);
    setInput('');
    chatMutation.mutate({ message });
  }

  function handleSuggestion(suggestion: string) {
    setInput(suggestion);
  }

  return (
    <Box sx={{ position: 'fixed', right: 0, bottom: 0, zIndex: theme.zIndex.modal + 2 }}>
      {isOpen && (
        <Paper
          aria-label="Assistente virtual"
          elevation={isMobile ? 0 : 18}
          sx={{
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            bgcolor: 'background.paper',
            zIndex: theme.zIndex.modal + 1,
            ...(isMobile
              ? { inset: 0, borderRadius: 0 }
              : {
                  right: 24,
                  bottom: 96,
                  width: 408,
                  height: 'min(640px, calc(100dvh - 120px))',
                  maxWidth: 'calc(100vw - 32px)',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                }),
          }}
        >
          <Box
            sx={{
              px: { xs: 2, sm: 2.5 },
              py: 2,
              color: 'primary.contrastText',
              background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
            }}
          >
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.18)', color: 'inherit' }}>
                  <SmartToyRoundedIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                    Assistente da Padaria
                  </Typography>
                  <Stack direction="row" spacing={0.75} sx={{ mt: 0.35, alignItems: 'center' }}>
                    <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#8DE8B0' }} />
                    <Typography variant="caption" sx={{ opacity: 0.86 }}>
                      Online para ajudar
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
              <IconButton aria-label="Fechar chat" onClick={() => setIsOpen(false)} sx={{ color: 'inherit' }}>
                <CloseRoundedIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box sx={{ flex: 1, overflowY: 'auto', px: { xs: 2, sm: 2.5 }, py: 3, bgcolor: 'grey.50' }}>
            <Stack spacing={2.5} sx={{ alignItems: 'flex-start' }}>
              <Typography variant="caption" color="text.secondary" sx={{ alignSelf: 'center' }}>
                Hoje
              </Typography>
              {messages.map((message) => (
                <Stack
                  key={message.id}
                  direction="row"
                  spacing={1.25}
                  sx={{
                    width: '100%',
                    alignItems: 'flex-end',
                    flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                  }}
                >
                  {message.role === 'assistant' && (
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                      <SmartToyRoundedIcon fontSize="small" />
                    </Avatar>
                  )}
                  <Paper
                    elevation={0}
                    sx={{
                      maxWidth: '82%',
                      p: 1.75,
                      color: message.role === 'user' ? 'primary.contrastText' : 'text.primary',
                      bgcolor: message.role === 'user' ? 'primary.main' : 'background.paper',
                      borderRadius: message.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      border: message.role === 'assistant' ? '1px solid' : undefined,
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                      {message.content}
                    </Typography>
                  </Paper>
                </Stack>
              ))}
              {messages.length === 1 && (
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                    Sugest?es r?pidas
                  </Typography>
                  <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                    {suggestions.map((suggestion) => (
                      <Chip key={suggestion} label={suggestion} size="small" variant="outlined" color="primary" onClick={() => handleSuggestion(suggestion)} />
                    ))}
                  </Stack>
                </Box>
              )}
              {chatMutation.isPending && (
                <Stack direction="row" spacing={1.25} sx={{ alignItems: 'flex-end' }}>
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                    <SmartToyRoundedIcon fontSize="small" />
                  </Avatar>
                  <Paper elevation={0} sx={{ p: 1.5, borderRadius: '16px 16px 16px 4px', border: '1px solid', borderColor: 'divider' }}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <CircularProgress size={16} />
                      <Typography variant="body2" color="text.secondary">Pensando...</Typography>
                    </Stack>
                  </Paper>
                </Stack>
              )}
              <Box ref={messagesEndRef} />
            </Stack>
          </Box>

          <Divider />
          <Box component="form" onSubmit={handleSubmit} sx={{ p: { xs: 1.5, sm: 2 }, bgcolor: 'background.paper' }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <TextField
                fullWidth
                size="small"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Escreva sua mensagem..."
                disabled={chatMutation.isPending}
                slotProps={{ htmlInput: { 'aria-label': 'Mensagem para o assistente' } }}
              />
              <IconButton
                type="submit"
                aria-label="Enviar mensagem"
                color="primary"
                disabled={!input.trim() || chatMutation.isPending}
                sx={{ bgcolor: 'primary.light', '&:hover': { bgcolor: 'primary.light' } }}
              >
                <SendRoundedIcon fontSize="small" />
              </IconButton>
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1, textAlign: 'center' }}>
              O assistente pode cometer erros. Confira informa??es importantes.
            </Typography>
          </Box>
        </Paper>
      )}

      <Fab
        color="primary"
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat'}
        onClick={() => setIsOpen((open) => !open)}
        sx={{
          position: 'fixed',
          right: { xs: 16, sm: 24 },
          bottom: { xs: 16, sm: 24 },
          boxShadow: 6,
          ...(isOpen && isMobile ? { display: 'none' } : {}),
        }}
      >
        {isOpen ? <CloseRoundedIcon /> : <ForumRoundedIcon />}
      </Fab>
    </Box>
  );
}
 */