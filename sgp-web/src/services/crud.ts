import type { AxiosInstance, AxiosRequestConfig } from 'axios';


export interface SpringPageResponse<T> {
  content?: T[];
  page?: {
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
  };
  totalElements?: number;
}

export class Service<T> {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async getBy(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.api.get<T>(endpoint, config);
    return data;
  }

  async getPageable(
    endpoint: string,
    params?: Record<string, unknown>
  ): Promise<SpringPageResponse<T> | T[]> {
    const { data } = await this.api.get(endpoint, { params });
    return data;
  }

  async post<TPayload = Partial<T>>(endpoint: string, payload: TPayload): Promise<T> {
    const { data } = await this.api.post<T>(endpoint, payload);
    return data;
  }

  async put<TPayload = Partial<T>>(endpoint: string, payload: TPayload): Promise<T> {
    const { data } = await this.api.put<T>(endpoint, payload);
    return data;
  }

  async patch<TPayload = Partial<T>>(endpoint: string, payload: TPayload): Promise<T> {
    const { data } = await this.api.patch<T>(endpoint, payload);
    return data;
  }

  async delete(endpoint: string): Promise<void> {
    await this.api.delete(endpoint);
  }
}