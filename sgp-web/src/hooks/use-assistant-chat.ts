/* import { type UseMutationOptions } from '@tanstack/react-query';
import { assistantService, type AssistantChatRequest, type AssistantChatResponse } from '../services/assistant';
import { useApiMutation } from './use-api-mutation';

export function useAssistantChat(
  options?: Omit<UseMutationOptions<AssistantChatResponse, Error, AssistantChatRequest>, 'mutationFn'>,
) {
  return useApiMutation(assistantService.sendMessage, options);
}
 */