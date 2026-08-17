/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod';

import type { Resolver, FieldValues } from 'react-hook-form';

/**
 * Wrapper para o zodResolver que resolve problemas de tipagem com z.coerce e z.preprocess.
 * Ele permite que o react-hook-form use o tipo de saída (z.output) de forma limpa,
 * sem exigir tipos separados para entrada e saída no formulário.
 */
export function resolverZod<T extends FieldValues>(schema: any): Resolver<T> {
  return zodResolver(schema) as unknown as Resolver<T>;
}
