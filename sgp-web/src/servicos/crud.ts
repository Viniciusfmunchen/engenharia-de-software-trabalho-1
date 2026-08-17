import type { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface RespostaPaginadaSpring<T> {
  content?: T[];
  page?: {
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
  };
  totalElements?: number;
}

export class Servico<T> {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async obterPor(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.api.get<T>(endpoint, config);
    return data;
  }

  async obterPaginado(
    endpoint: string,
    params?: Record<string, unknown>,
  ): Promise<RespostaPaginadaSpring<T> | T[]> {
    const { data } = await this.api.get(endpoint, { params });
    return data;
  }

  async criar<TCarga = Partial<T>>(endpoint: string, carga: TCarga): Promise<T> {
    const { data } = await this.api.post<T>(endpoint, carga);
    return data;
  }

  async atualizar<TCarga = Partial<T>>(endpoint: string, carga: TCarga): Promise<T> {
    const { data } = await this.api.put<T>(endpoint, carga);
    return data;
  }

  async atualizarParcial<TCarga = Partial<T>>(endpoint: string, carga: TCarga): Promise<T> {
    const { data } = await this.api.patch<T>(endpoint, carga);
    return data;
  }

  async excluir(endpoint: string): Promise<void> {
    await this.api.delete(endpoint);
  }
}
