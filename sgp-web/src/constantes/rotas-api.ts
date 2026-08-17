export const ENDPOINTS = {
  RECEITA: {
    BASE: '/receita',
    POR_ID: (id: string | number | null | undefined) => `/receita/${id}`,
    SIMULAR: '/receita/simular',
  },
  INGREDIENTE: {
    BASE: '/ingrediente',
    POR_ID: (id: string | number | null | undefined) => `/ingrediente/${id}`,
    CATEGORIA: '/ingrediente/categoria',
    UM: '/ingrediente/unidade'
  },
  ASSISTENTE: {
    CHAT: '/assistant/chat',
  },
} as const;
