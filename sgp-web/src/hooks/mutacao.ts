import { apiSgp } from '@/lib/api-sgp';
import { Servico } from '@/servicos/crud';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { useMemo } from 'react';

interface CargaMutacao<TCarga> {
  endpoint: string;
  payload: TCarga;
}

interface CargaExclusao {
  endpoint: string;
}

// --- POST ---
export const useCriar = <TResposta, TCarga>(
  opcoes?: UseMutationOptions<TResposta, Error, CargaMutacao<TCarga>>,
) => {
  const servico = useMemo(() => new Servico<TResposta>(apiSgp), []);

  return useMutation({
    mutationFn: async ({ endpoint, payload }) => {
      return await servico.criar<TCarga>(endpoint, payload);
    },
    ...opcoes,
  });
};

// --- PUT ---
export const useAtualizar = <TResposta, TCarga>(
  opcoes?: UseMutationOptions<TResposta, Error, CargaMutacao<TCarga>>,
) => {
  const servico = useMemo(() => new Servico<TResposta>(apiSgp), []);

  return useMutation({
    mutationFn: async ({ endpoint, payload }) => {
      return await servico.atualizar<TCarga>(endpoint, payload);
    },
    ...opcoes,
  });
};

// --- PATCH ---
export const useAtualizarParcial = <TResposta, TCarga>(
  opcoes?: UseMutationOptions<TResposta, Error, CargaMutacao<TCarga>>,
) => {
  const servico = useMemo(() => new Servico<TResposta>(apiSgp), []);

  return useMutation({
    mutationFn: async ({ endpoint, payload }) => {
      return await servico.atualizarParcial<TCarga>(endpoint, payload);
    },
    ...opcoes,
  });
};

// --- DELETE ---
export const useExcluir = (
  opcoes?: UseMutationOptions<void, Error, CargaExclusao>,
) => {
  const servico = useMemo(() => new Servico<void>(apiSgp), []);

  return useMutation({
    mutationFn: async ({ endpoint }) => {
      return await servico.excluir(endpoint);
    },
    ...opcoes,
  });
};
