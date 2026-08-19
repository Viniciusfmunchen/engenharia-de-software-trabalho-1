export const ROTAS_API = {
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
  UNIDADE: {
    BASE: '/unidade',
    POR_ID: (id: string | number | null | undefined) => `/unidade/${id}`,
  },
  ASSISTENTE: {
    CHAT: '/assistente/chat',
  },
  COMPRA: {
    BASE: '/compra',
  },
  FORNECEDOR: {
    BASE: '/fornecedor',
  },
  VENDA: {
    BASE: '/venda',
  },
  CLIENTE: {
    BASE: '/cliente',
  },
} as const;
