import {
  useMutation,
  useQueryClient,
  type MutationFunction,
  type QueryKey,
  type UseMutationOptions,
} from '@tanstack/react-query';

type ApiMutationOptions<TData, TVariables, TContext> = Omit<
  UseMutationOptions<TData, Error, TVariables, TContext>,
  'mutationFn'
> & {
  invalidateQueryKeys?: QueryKey[];
};

export function useApiMutation<TData, TVariables, TContext = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: ApiMutationOptions<TData, TVariables, TContext>,
) {
  const queryClient = useQueryClient();
  const { invalidateQueryKeys, onSuccess, ...mutationOptions } = options ?? {};

  return useMutation({
    mutationFn,
    ...mutationOptions,
    onSuccess: async (data, variables, onMutateResult, context) => {
      await Promise.all(
        invalidateQueryKeys?.map((queryKey) => queryClient.invalidateQueries({ queryKey })) ?? [],
      );
      await onSuccess?.(data, variables, onMutateResult, context);
    },
  });
}
