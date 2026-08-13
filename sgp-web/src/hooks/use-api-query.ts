import { useQuery, type QueryFunction, type QueryKey, type UseQueryOptions, type UseQueryResult } from '@tanstack/react-query';

type ApiQueryOptions<TData> = Omit<
  UseQueryOptions<TData, Error, TData, QueryKey>,
  'queryFn' | 'queryKey'
>;

export function useApiQuery<TData>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TData, QueryKey>,
  options?: ApiQueryOptions<TData>,
): UseQueryResult<TData, Error> {
  return useQuery<TData>({
    queryKey,
    queryFn,
    ...options,
  });
}
