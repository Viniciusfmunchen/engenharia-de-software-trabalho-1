import type { UnidadeMedida } from "@/schemas/unidade-medida"
import Tabela, { type ColunaTabela } from "../ui/tabela"

interface PropriedadesUnidadeMedida {
    unidadesMedida: UnidadeMedida[]
}

const TabelaUnidadeMedida = ({ unidadesMedida }: PropriedadesUnidadeMedida) => {
    const colunas: ColunaTabela<UnidadeMedida>[] = [
        {
            id: 'nomeUnidadeMedida',
            label: 'Nome',
            render: (linha) => linha.nomeUnidadeMedida,
            sortAccessor: (linha) => linha.nomeUnidadeMedida,
        },
        {
            id: 'abreviacao',
            label: 'Abreviação',
            render: (linha) => linha.abreviacao,
            sortAccessor: (linha) => linha.abreviacao,
        },

    ];


    return (
        <Tabela
            colunas={colunas}
            linhas={unidadesMedida}
            obterIdLinha={(linha) => linha.idUnidadeMedida}
        />
    )
}

export default TabelaUnidadeMedida