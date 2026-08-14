// hooks/useQueries.ts
import { sgpApi } from '@/lib/sgp-api';
import { Service } from '@/services/crud';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

interface ParamsGetBy {
    endpoint: string;
    enabled?: boolean;
}

// GET Simples (Para um ID específico ou retorno de objeto único)
export const useGet = <T>({ endpoint, enabled = true }: ParamsGetBy) => {
    const service = useMemo(() => new Service<T>(sgpApi), []);

    return useQuery({
        queryKey: [endpoint],
        queryFn: async () => await service.getBy(endpoint),
        enabled,
    });
};

interface GetPageableParams {
    endpoint: string;
    requestParams?: Record<string, unknown>;
    enabled?: boolean;
    enabledSort?: boolean;
}

// GET Paginado (Integrado com Spring Boot e Tabela)
export const useGetPageable = <T>({
    endpoint,
    requestParams,
    enabled = true,
    enabledSort = true,
}: GetPageableParams) => {
    const service = useMemo(() => new Service<T>(sgpApi), []);
    /* const { page, rowsPerPage } = usePagination();
    const { sort } = useSorting();
    const { filters } = useFiltering(); */

    const queryKey = useMemo(
        () => [endpoint, /* page, rowsPerPage, sort, filters, */ requestParams],
        [endpoint, /* page, rowsPerPage, sort, filters, */ requestParams]
    );

    const { data: response, ...queryReturn } = useQuery({
        queryKey,
        queryFn: async () => {
            const params = {
                unpaged: false,
                /*                 page,
                                size: rowsPerPage,
                                ...filters,
                                ...(sort && enabledSort && { sort }), */
                ...requestParams,
            };

            const data = await service.getPageable(endpoint, params);

            const isSpringPage = data && typeof data === 'object' && 'content' in data;

            return {
                data: isSpringPage ? data.content ?? [] : (data as T[]),
                totalElements: isSpringPage ? data.page?.totalElements ?? data.totalElements ?? 0 : (data as T[]).length,
            };
        },
        enabled,
    });

    return {
        data: response?.data ?? [],
        totalElements: response?.totalElements ?? 0,
        ...queryReturn,
    };
};