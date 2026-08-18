
import { useForm } from 'react-hook-form'
import { resolverZod } from '@/utils/resolver'

import { useCriar } from '@/hooks/mutacao'
import { ROTAS_API } from '@/constantes/rotas-api'
import { useQueryClient } from '@tanstack/react-query'
import { criarCategoriaIngredienteSchema, type CategoriaIngrediente, type CriarCategoriaIngrediente } from '@/schemas/categoria-ingrediente'
import ModalFormulario from '@/componentes/ui/formularios/modal'
import { CampoTextoFormulario } from '@/componentes/ui/formularios/campos'

interface PropriedadesFormularioCategoriaIngrediente {
    aberto?: boolean
    aoFechar: () => void
}

const FormularioCategoriaIngrediente = ({ aberto, aoFechar }: PropriedadesFormularioCategoriaIngrediente) => {
    const form = useForm<CriarCategoriaIngrediente>({
        resolver: resolverZod(criarCategoriaIngredienteSchema),
        defaultValues: {
            nomeCategoria: '',
        }
    })

    const queryClient = useQueryClient()
    const mutacaoCriarUnidadeMedida = useCriar<CategoriaIngrediente, CriarCategoriaIngrediente>({
        onSuccess: (dadosCriados) => {
            console.log('Categoria do ingrediente criada com sucesso:', dadosCriados);
            queryClient.invalidateQueries({ queryKey: [ROTAS_API.INGREDIENTE.CATEGORIA] });
        },
        onError: (erro) => {
            console.error('Erro ao salvar categoria ingrediente:', erro);
        },
    });

    const manipularFechamento = () => {
        form.reset();
        aoFechar()
    };

    const manipularSubmissao = (valores: CriarCategoriaIngrediente) => {
        mutacaoCriarUnidadeMedida.mutate({ endpoint: ROTAS_API.INGREDIENTE.CATEGORIA, payload: valores });
        manipularFechamento();
    };

    return (
        <ModalFormulario titulo='Cadastrar categoria de ingrediente' formulario={form} aoSubmeter={manipularSubmissao} aberto={aberto} aoFechar={manipularFechamento}>
            <CampoTextoFormulario
                name="nomeCategoria"
                label='Abreviação'
                size="small"
                autoFocus
                fullWidth
            />
        </ModalFormulario>
    )
}

export default FormularioCategoriaIngrediente