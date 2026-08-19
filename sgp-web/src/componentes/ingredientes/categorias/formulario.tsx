
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { resolverZod } from '@/utils/resolver'

import { useAtualizar, useCriar } from '@/hooks/mutacao'
import { ROTAS_API } from '@/constantes/rotas-api'
import { useObter } from '@/hooks/consulta'
import { useQueryClient } from '@tanstack/react-query'
import { criarCategoriaIngredienteSchema, type CategoriaIngrediente, type CriarCategoriaIngrediente } from '@/schemas/categoria-ingrediente'
import ModalFormulario from '@/componentes/ui/formularios/modal'
import { CampoTextoFormulario } from '@/componentes/ui/formularios/campos'

interface PropriedadesFormularioCategoriaIngrediente {
  aberto?: boolean;
  aoFechar: () => void;
  idCategoria?: string | number;
}

const FormularioCategoriaIngrediente = ({ aberto, aoFechar, idCategoria }: PropriedadesFormularioCategoriaIngrediente) => {
  const queryClient = useQueryClient();

  const form = useForm<CriarCategoriaIngrediente>({
    resolver: resolverZod(criarCategoriaIngredienteSchema),
    defaultValues: {
      nomeCategoria: '',
    }
  });

  const { dados: categoriaEditando } = useObter<CategoriaIngrediente>({
    endpoint: `${ROTAS_API.INGREDIENTE.CATEGORIA}/${idCategoria}`,
    habilitado: !!idCategoria && aberto,
  });

  useEffect(() => {
    if (idCategoria && categoriaEditando) {
      form.reset({ nomeCategoria: categoriaEditando.nomeCategoria });
    }
  }, [idCategoria, categoriaEditando, form]);

  const mutacaoCriar = useCriar<CategoriaIngrediente, CriarCategoriaIngrediente>({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.INGREDIENTE.CATEGORIA] });
    },
  });

  const mutacaoAtualizar = useAtualizar<CategoriaIngrediente, CriarCategoriaIngrediente>({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ROTAS_API.INGREDIENTE.CATEGORIA] });
    },
  });

  const manipularFechamento = () => {
    form.reset({ nomeCategoria: '' });
    aoFechar();
  };

  const manipularSubmissao = (valores: CriarCategoriaIngrediente) => {
    if (idCategoria) {
      mutacaoAtualizar.mutate({ endpoint: `${ROTAS_API.INGREDIENTE.CATEGORIA}/${idCategoria}`, payload: valores });
    } else {
      mutacaoCriar.mutate({ endpoint: ROTAS_API.INGREDIENTE.CATEGORIA, payload: valores });
    }
    manipularFechamento();
  };

  return (
    <ModalFormulario titulo='Cadastrar categoria de ingrediente' formulario={form} aoSubmeter={manipularSubmissao} aberto={aberto} aoFechar={manipularFechamento}>
      <CampoTextoFormulario
        name="nomeCategoria"
        label='Nome da categoria'
        size="small"
        autoFocus
        fullWidth
      />
    </ModalFormulario>
  )
}

export default FormularioCategoriaIngrediente
