import { type FormEvent, useEffect, useRef, useState } from 'react';
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
import { useChatAssistente } from '@/hooks/usar-chat-assistente';

type MensagemChat = {
  id: string;
  papel: 'assistente' | 'usuario';
  conteudo: string;
  intencao?: string;
};

const sugestoes = ['Consultar estoque', 'Ver vendas de hoje', 'Ajuda com receitas'];

const mensagemInicial: MensagemChat = {
  id: 'boas-vindas',
  papel: 'assistente',
  conteudo: 'Olá! Sou o assistente do SGP. Como posso ajudar você hoje?',
};

function criarMensagem(papel: MensagemChat['papel'], conteudo: string, intencao?: string): MensagemChat {
  return { id: crypto.randomUUID(), papel, conteudo, intencao };
}

export default function Chat() {
  const [estaAberto, setEstaAberto] = useState(false);
  const [entrada, setEntrada] = useState('');
  const [mensagens, setMensagens] = useState<MensagemChat[]>([mensagemInicial]);
  const referenciaFimMensagens = useRef<HTMLDivElement>(null);
  const tema = useTheme();
  const ehMovel = useMediaQuery(tema.breakpoints.down('sm'));

  const mutacaoChat = useChatAssistente({
    onSuccess: (resposta) => {
      setMensagens((atual) => [
        ...atual,
        criarMensagem('assistente', resposta.mensagem, resposta.intencao),
      ]);
    },
    onError: () => {
      setMensagens((atual) => [
        ...atual,
        criarMensagem(
          'assistente',
          'Não foi possível responder agora. Verifique a conexão com o servidor e tente novamente.',
        ),
      ]);
    },
  });

  useEffect(() => {
    referenciaFimMensagens.current?.scrollIntoView({ behavior: 'smooth' });
  }, [estaAberto, mensagens, mutacaoChat.isPending]);

  function manipularSubmissao(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const textoMensagem = entrada.trim();

    if (!textoMensagem || mutacaoChat.isPending) {
      return;
    }

    setMensagens((atual) => [...atual, criarMensagem('usuario', textoMensagem)]);
    setEntrada('');
    mutacaoChat.mutate({ mensagem: textoMensagem });
  }

  function manipularSugestao(sugestao: string) {
    setEntrada(sugestao);
  }

  return (
    <Box sx={{ position: 'fixed', right: 0, bottom: 0, zIndex: tema.zIndex.modal + 2 }}>
      {estaAberto && (
        <Paper
          aria-label="Assistente virtual"
          elevation={ehMovel ? 0 : 18}
          sx={{
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            bgcolor: 'background.paper',
            zIndex: tema.zIndex.modal + 1,
            ...(ehMovel
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
              background: tema.palette.primary.main,
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
              <IconButton aria-label="Fechar chat" onClick={() => setEstaAberto(false)} sx={{ color: 'inherit' }}>
                <CloseRoundedIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box sx={{ flex: 1, overflowY: 'auto', px: { xs: 2, sm: 2.5 }, py: 3, bgcolor: 'grey.50' }}>
            <Stack spacing={2.5} sx={{ alignItems: 'flex-start' }}>
              <Typography variant="caption" color="text.secondary" sx={{ alignSelf: 'center' }}>
                Hoje
              </Typography>
              {mensagens.map((msg) => (
                <Stack
                  key={msg.id}
                  direction="row"
                  spacing={1.25}
                  sx={{
                    width: '100%',
                    alignItems: 'flex-end',
                    flexDirection: msg.papel === 'usuario' ? 'row-reverse' : 'row',
                  }}
                >
                  {msg.papel === 'assistente' && (
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                      <SmartToyRoundedIcon fontSize="small" />
                    </Avatar>
                  )}
                  <Paper
                    elevation={0}
                    sx={{
                      maxWidth: '82%',
                      p: 1.75,
                      color: msg.papel === 'usuario' ? 'primary.contrastText' : 'text.primary',
                      bgcolor: msg.papel === 'usuario' ? 'primary.main' : 'background.paper',
                      borderRadius: msg.papel === 'usuario' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      border: msg.papel === 'assistente' ? '1px solid' : undefined,
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                      {msg.conteudo}
                    </Typography>
                  </Paper>
                </Stack>
              ))}
              {mutacaoChat.isPending && (
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
              <Box ref={referenciaFimMensagens} />
            </Stack>
          </Box>

          <Divider />
          <Box component="form" onSubmit={manipularSubmissao} sx={{ p: { xs: 1.5, sm: 2 }, bgcolor: 'background.paper' }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <TextField
                fullWidth
                size="small"
                value={entrada}
                onChange={(evento) => setEntrada(evento.target.value)}
                placeholder="Escreva sua mensagem..."
                disabled={mutacaoChat.isPending}
                slotProps={{ htmlInput: { 'aria-label': 'Mensagem para o assistente' } }}
              />
              <IconButton
                type="submit"
                aria-label="Enviar mensagem"
                color="primary"
                disabled={!entrada.trim() || mutacaoChat.isPending}
                sx={{ bgcolor: 'primary.light', '&:hover': { bgcolor: 'primary.light' } }}
              >
                <SendRoundedIcon fontSize="small" />
              </IconButton>
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1, textAlign: 'center' }}>
              O assistente pode cometer erros. Confira informações importantes.
            </Typography>
          </Box>
        </Paper>
      )}

      <Fab
        color="primary"
        aria-label={estaAberto ? 'Fechar chat' : 'Abrir chat'}
        onClick={() => setEstaAberto((aberto) => !aberto)}
        sx={{
          position: 'fixed',
          right: { xs: 16, sm: 24 },
          bottom: { xs: 16, sm: 24 },
          boxShadow: 6,
          ...(estaAberto && ehMovel ? { display: 'none' } : {}),
        }}
      >
        {estaAberto ? <CloseRoundedIcon /> : <ForumRoundedIcon />}
      </Fab>
    </Box>
  );
}
