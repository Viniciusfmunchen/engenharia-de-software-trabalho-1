import { apiSgp } from '@/lib/api-sgp';
import { ROTAS_API } from '@/constantes/rotas-api';

export interface RequisicaoChatAssistente {
  mensagem: string;
}

export interface RespostaChatAssistente {
  intencao?: string;
  mensagem: string;
}

export const servicoAssistente = {
  async enviarMensagem(corpo: RequisicaoChatAssistente): Promise<RespostaChatAssistente> {
    const { data: dados } = await apiSgp.post<RespostaChatAssistente>(ROTAS_API.ASSISTENTE.CHAT, corpo);
    return dados;
  },
};
