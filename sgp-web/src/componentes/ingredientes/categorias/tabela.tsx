import type { CategoriaIngrediente } from "@/schemas/categoria-ingrediente";
import type { ColunaTabela } from "@/componentes/ui/tabela";
import Tabela from "@/componentes/ui/tabela";

interface PropriedadesCategoria {
    categorias: CategoriaIngrediente[]
}

const TabelaCategoria = ({ categorias }: PropriedadesCategoria) => {
    const colunas: ColunaTabela<CategoriaIngrediente>[] = [
        {
            id: 'nomeCategoria',
            label: 'Nome',
            render: (linha) => linha.nomeCategoria,
            sortAccessor: (linha) => linha.nomeCategoria,
        },

    ];

    return (
        <Tabela
            colunas={colunas}
            linhas={categorias}
            obterIdLinha={(linha) => linha.idCategoriaIngrediente}
        />
    )
}

export default TabelaCategoria