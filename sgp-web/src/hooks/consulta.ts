import { apiSgp } from '@/lib/api-sgp';
import { Servico } from '@/servicos/crud';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

interface ParametrosObterPor {
  endpoint: string;
  habilitado?: boolean;
}

// GET Simples (Para um ID específico ou retorno de objeto único)
export const useObter = <T>({ endpoint, habilitado = true }: ParametrosObterPor) => {
  const servico = useMemo(() => new Servico<T>(apiSgp), []);

  const { data, ...resto } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => await servico.obterPor(endpoint),
    enabled: habilitado,
  });

  return { dados: data as T | undefined, ...resto };
};

interface ParametrosObterPaginado {
  endpoint: string;
  parametrosRequisicao?: Record<string, unknown>;
  habilitado?: boolean;
  habilitarOrdenacao?: boolean;
}

// GET Paginado (Integrado com Spring Boot e Tabela)
export const useObterPaginado = <T>({
  endpoint,
  parametrosRequisicao,
  habilitado = true,
}: ParametrosObterPaginado) => {
  const servico = useMemo(() => new Servico<T>(apiSgp), []);

  const queryKey = useMemo(
    () => [endpoint, parametrosRequisicao],
    [endpoint, parametrosRequisicao],
  );

  const { data: resposta, ...retornoConsulta } = useQuery({
    queryKey,
    queryFn: async () => {
      const params = {
        unpaged: false,
        ...parametrosRequisicao,
      };

      const data = await servico.obterPaginado(endpoint, params);
      const isSpringPage = data && typeof data === 'object' && 'content' in data;

      return {
        dados: isSpringPage ? data.content ?? [] : (data as T[]),
        totalElementos: isSpringPage
          ? data.page?.totalElements ?? data.totalElements ?? 0
          : (data as T[]).length,
      };
    },
    enabled: habilitado,
  });

  return {
    dados: resposta?.dados ?? [],
    totalElementos: resposta?.totalElementos ?? 0,
    ...retornoConsulta,
  };
};
