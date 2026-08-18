import { useCriar } from '@/hooks/mutacao';
import { ROTAS_API } from '@/constantes/rotas-api';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { resolverZod } from '@/utils/resolver';
import { z } from 'zod';
import { CampoSelecaoFormulario, CampoTextoFormulario } from '../ui/formularios/campos';
import { useObterPaginado } from '@/hooks/consulta';
import type { Ingrediente } from '@/schemas/ingrediente';
import ModalFormulario from '../ui/formularios/modal';

const schemaAdicionar = z.object({
  idIngrediente: z.coerce.number().min(1, 'Selecione um ingrediente'),
  quantidade: z.coerce.number().positive('Quantidade deve ser positiva')
});

type FormAdicionar = z.infer<typeof schemaAdicionar>;

export const AdicionarIngredienteReceita = ({ idReceita, aberto, aoFechar }: { idReceita: number | string, aberto: boolean, aoFechar: () => void }) => {
  const queryClient = useQueryClient();
  const form = useForm<FormAdicionar>({
    resolver: resolverZod(schemaAdicionar),
    defaultValues: { idIngrediente: 0, quantidade: 0 }
  });

  const { dados: ingredientes } = useObterPaginado<Ingrediente>({
    endpoint: ROTAS_API.INGREDIENTE.BASE,
    paginado: false
  });

  const mutacaoAdd = useCriar<any, FormAdicionar>({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.RECEITA.POR_ID(idReceita)] });
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.RECEITA.BASE] });
      aoFechar();
      form.reset();
    }
  });

  const onSubmit = (data: FormAdicionar) => {
    mutacaoAdd.mutate({ endpoint: `${ROTAS_API.RECEITA.BASE}/${idReceita}/ingrediente`, payload: data });
  };

  return (
    <ModalFormulario
      aberto={aberto}
      titulo="Adicionar Ingrediente"
      formulario={form}
      aoFechar={aoFechar}
      aoSubmeter={onSubmit}
    >
      <CampoSelecaoFormulario
        name="idIngrediente"
        label="Ingrediente"
        options={ingredientes?.map(i => ({ label: i.nomeIngrediente, value: i.idIngrediente })) || []}
        size="small"
        fullWidth
      />
      <CampoTextoFormulario
        name="quantidade"
        label="Quantidade"
        type="number"
        size="small"
        fullWidth
        slotProps={{ htmlInput: { min: 0.1, step: '0.01' } }}
      />
    </ModalFormulario>
  );
};
