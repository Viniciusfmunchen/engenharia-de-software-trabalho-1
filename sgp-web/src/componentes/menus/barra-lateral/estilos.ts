import {
  LARGURA_BARRA_LATERAL,
  LARGURA_BARRA_LATERAL_RECOLHIDA,
} from '@/constantes/interface';
import { coresPadaria } from '@/tema';

import { Box, Stack, ToggleButton, Typography, styled } from '@mui/material';

export const ConteinerBarraLateral = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'recolhida' && prop !== 'collapsed',
})<{ recolhida?: boolean; collapsed?: boolean }>(({ recolhida, collapsed }) => {
  const estaRecolhida = recolhida ?? collapsed;
  return {
    width: estaRecolhida ? LARGURA_BARRA_LATERAL_RECOLHIDA : LARGURA_BARRA_LATERAL,
    backgroundColor: coresPadaria.barraLateral,
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1200,
    transition: 'width 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
  };
});

export const CabecalhoBarraLateral = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  padding: '12px 16px',
  height: 64,
  gap: 12,
  color: coresPadaria.textoClaro,
});

export const EspacoIconeBarraLateral = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 40,
});

export const TextoBarraLateral = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'recolhida' && prop !== 'collapsed',
})<{ recolhida?: boolean }>(({ recolhida }) => {
  const estaRecolhida = recolhida;
  return {
    whiteSpace: 'nowrap',
    opacity: estaRecolhida ? 0 : 1,
    visibility: estaRecolhida ? 'hidden' : 'visible',
    transition: 'opacity 150ms ease, visibility 150ms ease',
    color: coresPadaria.textoClaro,
  };
});

export const MenuBarraLateral = styled(Stack)({
  padding: 8,
  gap: 4,
  flex: 1,
});

export const BotaoItemBarraLateral = styled(ToggleButton)({
  justifyContent: 'flex-start',
  padding: '10px 12px',
  borderRadius: 8,
  border: 'none',
  gap: 12,
  color: '#d5c7bc',
  width: '100%',

  '&:hover': {
    backgroundColor: coresPadaria.barraLateralHover,
    color: coresPadaria.textoClaro,
  },

  '&.Mui-selected': {
    backgroundColor: coresPadaria.barraLateralSelecionada,
    color: coresPadaria.textoClaro,

    '&:hover': {
      backgroundColor: coresPadaria.barraLateralSelecionadaHover,
    },
  },
});

export const BotaoSubitemBarraLateral = styled(BotaoItemBarraLateral)({
  paddingLeft: 48,
  fontSize: '0.85rem',
  background: coresPadaria.barraLateralHover
});
