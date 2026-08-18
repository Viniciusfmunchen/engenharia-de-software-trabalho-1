import { apiSgp } from '@/lib/api-sgp';
import { Servico } from '@/servicos/crud';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

interface ParametrosObterPor {
  endpoint: string;
  habilitado?: boolean;
}

export const useObter = <T>({ endpoint, habilitado = true }: ParametrosObterPor) => {
  const servico = useMemo(() => new Servico<T>(apiSgp), []);

  const { data, ...resto } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => await servico.obterPor(endpoint),
    enabled: habilitado,
  });

  return { dados: data as T | undefined, ...resto };
};

interface ParametrosObterTodos {
  endpoint: string;
  parametrosRequisicao?: Record<string, unknown>;
  habilitado?: boolean;
}

interface ParametrosObterPaginado extends ParametrosObterTodos {
  habilitarOrdenacao?: boolean;
  paginado?: boolean
}

export const useObterPaginado = <T>({
  endpoint,
  parametrosRequisicao,
  habilitado = true,
  paginado = true,
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
        unpaged: !paginado,
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
