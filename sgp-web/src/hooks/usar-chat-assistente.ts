import {
  servicoAssistente,
  type RequisicaoChatAssistente,
  type RespostaChatAssistente,
} from '@/servicos/assistente';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

export function useChatAssistente(
  opcoes?: UseMutationOptions<RespostaChatAssistente, Error, RequisicaoChatAssistente>,
) {
  return useMutation({
    mutationFn: (requisicao: RequisicaoChatAssistente) =>
      servicoAssistente.enviarMensagem(requisicao),
    ...opcoes,
  });
}
