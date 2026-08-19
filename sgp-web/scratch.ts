import { z } from 'zod';

const mySchemaBase = z.object({
  id: z.coerce.number(),
});

type Output = z.output<typeof mySchemaBase>;

const mySchema: z.ZodType<Output, z.ZodTypeDef, Output> = mySchemaBase;

type Input = z.input<typeof mySchema>;

const test1: Input = { id: 1 };
