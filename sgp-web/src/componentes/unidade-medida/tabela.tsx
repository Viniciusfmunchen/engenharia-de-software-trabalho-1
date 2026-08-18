import type { UnidadeMedida } from "@/schemas/unidade-medida"
import Tabela, { type ColunaTabela } from "../ui/tabela"
import { IconButton, Stack } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

interface PropriedadesUnidadeMedida {
    unidadesMedida: UnidadeMedida[]
    aoEditar?: (unidade: UnidadeMedida) => void;
    aoExcluir?: (unidade: UnidadeMedida) => void;
}

const TabelaUnidadeMedida = ({ unidadesMedida, aoEditar, aoExcluir }: PropriedadesUnidadeMedida) => {
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
        {
            id: 'acoes',
            label: 'Ações',
            align: 'center',
            render: (linha) => (
                <Stack direction="row" spacing={1} justifyContent="center">
                    {aoEditar && (
                        <IconButton size="small" color="primary" onClick={() => aoEditar(linha)}>
                            <Edit fontSize="small" />
                        </IconButton>
                    )}
                    {aoExcluir && (
                        <IconButton size="small" color="error" onClick={() => aoExcluir(linha)}>
                            <Delete fontSize="small" />
                        </IconButton>
                    )}
                </Stack>
            ),
        }
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