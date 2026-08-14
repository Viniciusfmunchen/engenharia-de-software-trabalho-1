// hooks/useMutations.ts
import { sgpApi } from '@/lib/sgp-api';
import { Service } from '@/services/crud';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { useMemo } from 'react';


// Tipagens para as variáveis que a Mutação vai receber
interface MutationPayload<TPayload> {
    endpoint: string;
    payload: TPayload;
}

interface DeletePayload {
    endpoint: string;
}

// --- POST ---
export const usePost = <TResponse, TPayload>(
    options?: UseMutationOptions<TResponse, Error, MutationPayload<TPayload>>
) => {
    const service = useMemo(() => new Service<TResponse>(sgpApi), []);

    return useMutation({
        mutationFn: async ({ endpoint, payload }) => {
            return await service.post<TPayload>(endpoint, payload);
        },
        ...options,
    });
};

// --- PUT ---
export const usePut = <TResponse, TPayload>(
    options?: UseMutationOptions<TResponse, Error, MutationPayload<TPayload>>
) => {
    const service = useMemo(() => new Service<TResponse>(sgpApi), []);

    return useMutation({
        mutationFn: async ({ endpoint, payload }) => {
            return await service.put<TPayload>(endpoint, payload);
        },
        ...options,
    });
};

// --- PATCH ---
export const usePatch = <TResponse, TPayload>(
    options?: UseMutationOptions<TResponse, Error, MutationPayload<TPayload>>
) => {
    const service = useMemo(() => new Service<TResponse>(sgpApi), []);

    return useMutation({
        mutationFn: async ({ endpoint, payload }) => {
            return await service.patch<TPayload>(endpoint, payload);
        },
        ...options,
    });
};

// --- DELETE ---
export const useDelete = (
    options?: UseMutationOptions<void, Error, DeletePayload>
) => {
    // Service<any> porque o DELETE não retorna corpo (void)
    const service = useMemo(() => new Service<any>(sgpApi), []);

    return useMutation({
        mutationFn: async ({ endpoint }) => {
            return await service.delete(endpoint);
        },
        ...options,
    });
};