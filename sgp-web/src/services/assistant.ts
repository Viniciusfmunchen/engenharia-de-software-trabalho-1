import { http } from '../lib/http';

export interface AssistantChatRequest {
  message: string;
}

export interface AssistantChatResponse {
  intent?: string;
  message: string;
}

export const assistantService = {
  async sendMessage(body: AssistantChatRequest): Promise<AssistantChatResponse> {
    const { data } = await http.post<AssistantChatResponse>('http://localhost:8080/assistant/chat', body);
    console.log('assistantService.sendMessage response:', data);
    return data;
  },
};
