/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod';

import type { Resolver, FieldValues } from 'react-hook-form';

export function resolverZod<T extends FieldValues>(schema: any): Resolver<T> {
  return zodResolver(schema) as unknown as Resolver<T>;
}
