import ModalFormulario from '../ui/formularios/modal'
import { useForm } from 'react-hook-form'
import { type CriarUnidadeMedida, criarUnidadeMedidaSchema, type UnidadeMedida } from '@/schemas/unidade-medida'
import { resolverZod } from '@/utils/resolver'
import { CampoTextoFormulario } from '../ui/formularios/campos'
import { useAtualizar, useCriar } from '@/hooks/mutacao'
import { ROTAS_API } from '@/constantes/rotas-api'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

interface PropriedadesFormularioUnidadeMedida {
    aberto?: boolean
    aoFechar: () => void
    unidadeEditando?: UnidadeMedida
}

const FormularioUnidadeMedida = ({ aberto, aoFechar, unidadeEditando }: PropriedadesFormularioUnidadeMedida) => {
    const form = useForm<CriarUnidadeMedida>({
        resolver: resolverZod(criarUnidadeMedidaSchema),
        defaultValues: {
            nomeUnidadeMedida: '',
            abreviacao: ''
        }
    })

    useEffect(() => {
        if (unidadeEditando) {
            form.reset({
                nomeUnidadeMedida: unidadeEditando.nomeUnidadeMedida,
                abreviacao: unidadeEditando.abreviacao
            });
        } else {
            form.reset({ nomeUnidadeMedida: '', abreviacao: '' });
        }
    }, [unidadeEditando, form]);

    const queryClient = useQueryClient()
    
    const mutacaoCriarUnidadeMedida = useCriar<UnidadeMedida, CriarUnidadeMedida>({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ROTAS_API.UNIDADE.BASE] });
        },
    });

    const mutacaoAtualizarUnidadeMedida = useAtualizar<UnidadeMedida, CriarUnidadeMedida>({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ROTAS_API.UNIDADE.BASE] });
        },
    });

    const manipularFechamento = () => {
        form.reset({ nomeUnidadeMedida: '', abreviacao: '' });
        aoFechar()
    };

    const manipularSubmissao = (valores: CriarUnidadeMedida) => {
        if (unidadeEditando) {
            mutacaoAtualizarUnidadeMedida.mutate({ endpoint: `${ROTAS_API.UNIDADE.BASE}/${unidadeEditando.idUnidadeMedida}`, payload: valores });
        } else {
            mutacaoCriarUnidadeMedida.mutate({ endpoint: ROTAS_API.UNIDADE.BASE, payload: valores });
        }
        manipularFechamento();
    };

    return (
        <ModalFormulario titulo={unidadeEditando ? 'Editar Unidade de Medida' : 'Cadastrar Unidade de Medida'} formulario={form} aoSubmeter={manipularSubmissao} aberto={aberto} aoFechar={manipularFechamento}>
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
                fullWidth
            />
        </ModalFormulario>
    )
}

export default FormularioUnidadeMedida