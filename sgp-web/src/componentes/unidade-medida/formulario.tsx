import ModalFormulario from '../ui/formularios/modal'
import { useForm } from 'react-hook-form'
import { type CriarUnidadeMedida, criarUnidadeMedidaSchema, type UnidadeMedida, unidadeMedidaIngredienteSchema } from '@/schemas/unidade-medida'
import { resolverZod } from '@/utils/resolver'
import { CampoTextoFormulario } from '../ui/formularios/campos'
import { useCriar } from '@/hooks/mutacao'
import { ROTAS_API } from '@/constantes/rotas-api'
import { useQueryClient } from '@tanstack/react-query'

interface PropriedadesFormularioUnidadeMedida {
    aberto?: boolean
    aoFechar: () => void
}

const FormularioUnidadeMedida = ({ aberto, aoFechar }: PropriedadesFormularioUnidadeMedida) => {
    const form = useForm<CriarUnidadeMedida>({
        resolver: resolverZod(criarUnidadeMedidaSchema),
        defaultValues: {
            nomeUnidadeMedida: '',
            abreviacao: ''
        }
    })

    const queryClient = useQueryClient()
    const mutacaoCriarUnidadeMedida = useCriar<UnidadeMedida, CriarUnidadeMedida>({
        onSuccess: (dadosCriados) => {
            console.log('Receita criada com sucesso:', dadosCriados);
            queryClient.invalidateQueries({ queryKey: [ROTAS_API.UNIDADE.BASE] });
        },
        onError: (erro) => {
            console.error('Erro ao salvar receita:', erro);
        },
    });

    const manipularFechamento = () => {
        form.reset();
        aoFechar()
    };

    const manipularSubmissao = (valores: CriarUnidadeMedida) => {
        mutacaoCriarUnidadeMedida.mutate({ endpoint: ROTAS_API.UNIDADE.BASE, payload: valores });
        manipularFechamento();
    };

    return (
        <ModalFormulario titulo='Cadastrar Unidade de Medida' formulario={form} aoSubmeter={manipularSubmissao} aberto={aberto} aoFechar={manipularFechamento}>
            <CampoTextoFormulario
                name="nomeUnidadeMedida"
                label='Nome'
                size="small"
                autoFocus
                fullWidth
            />
            <CampoTextoFormulario
                name="abreviacao"
                label='Abreviação'
                size="small"
                autoFocus
                fullWidth
            />
        </ModalFormulario>
    )
}

export default FormularioUnidadeMedida