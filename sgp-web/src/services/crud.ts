import { http } from '../lib/http';

export type ResourceId = number | string;
export type QueryParams = Record<string, boolean | number | string | undefined>;

export interface CrudService<TEntity, TCreate, TUpdate = Partial<TCreate>> {
  list(params?: QueryParams): Promise<TEntity[]>;
  getById(id: ResourceId): Promise<TEntity>;
  create(payload: TCreate): Promise<TEntity>;
  update(id: ResourceId, payload: TUpdate): Promise<TEntity>;
  remove(id: ResourceId): Promise<void>;
}

export function createCrudService<TEntity, TCreate, TUpdate = Partial<TCreate>>(
  resource: string,
): CrudService<TEntity, TCreate, TUpdate> {
  return {
    async list(params) {
      const { data } = await http.get<TEntity[]>(`http://localhost:8080/${resource}`, { params });
      return data;
    },
    async getById(id) {
      const { data } = await http.get<TEntity>(`http://localhost:8080/${resource}/${id}`);
      return data;
    },
    async create(payload) {
      const { data } = await http.post<TEntity>(`http://localhost:8080/${resource}`, payload);
      return data;
    },
    async update(id, payload) {
      const { data } = await http.put<TEntity>(`http://localhost:8080/${resource}/${id}`, payload);
      return data;
    },
    async remove(id) {
      await http.delete(`http://localhost:8080/${resource}/${id}`);
    },
  };
}
