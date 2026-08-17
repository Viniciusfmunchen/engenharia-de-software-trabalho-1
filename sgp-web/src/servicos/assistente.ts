import { apiSgp } from '@/lib/api-sgp';
import { ENDPOINTS } from '@/constantes/rotas-api';

export interface RequisicaoChatAssistente {
  mensagem: string;
}

export interface RespostaChatAssistente {
  intencao?: string;
  mensagem: string;
}

export const servicoAssistente = {
  async enviarMensagem(corpo: RequisicaoChatAssistente): Promise<RespostaChatAssistente> {
    const { data } = await apiSgp.post<RespostaChatAssistente>(ENDPOINTS.ASSISTENTE.CHAT, corpo);
    return data;
  },
};
