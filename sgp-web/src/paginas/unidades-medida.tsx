import FormularioUnidadeMedida from '@/componentes/unidade-medida/formulario'
import TabelaUnidadeMedida from '@/componentes/unidade-medida/tabela'
import { ROTAS_API } from '@/constantes/rotas-api'
import { useObterPaginado } from '@/hooks/consulta'
import { useExcluir } from '@/hooks/mutacao'
import LayoutPagina from '@/layouts/pagina'
import type { UnidadeMedida } from '@/schemas/unidade-medida'
import { coresPadaria } from '@/tema'
import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

const UnidadesMedida = () => {
    const [formAberto, setFormAberto] = useState<boolean>(false)
    const [unidadeEditando, setUnidadeEditando] = useState<UnidadeMedida | undefined>()
    
    const queryClient = useQueryClient();
    const { dados: unidadesMedida } = useObterPaginado<UnidadeMedida>({ endpoint: ROTAS_API.UNIDADE.BASE })
    
    const mutacaoExcluir = useExcluir({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ROTAS_API.UNIDADE.BASE] });
        }
    });

    const handleEditar = (unidade: UnidadeMedida) => {
        setUnidadeEditando(unidade);
        setFormAberto(true);
    };

    const handleExcluir = (unidade: UnidadeMedida) => {
        if (window.confirm(`Deseja realmente excluir a unidade ${unidade.nomeUnidadeMedida}?`)) {
            mutacaoExcluir.mutate({ endpoint: `${ROTAS_API.UNIDADE.BASE}/${unidade.idUnidadeMedida}` });
        }
    };

    return (
        <LayoutPagina titulo='Unidades de Medida' lateral={
            <Button
                variant="contained"
                startIcon={<Add />}
                sx={{
                    bgcolor: coresPadaria.barraLateral,
                    color: coresPadaria.textoClaro,
                    '&:hover': { bgcolor: coresPadaria.barraLateralSelecionadaHover },
                }}
                onClick={() => {
                    setUnidadeEditando(undefined);
                    setFormAberto(true);
                }} />}>
            <TabelaUnidadeMedida unidadesMedida={unidadesMedida} aoEditar={handleEditar} aoExcluir={handleExcluir} />
            <FormularioUnidadeMedida aberto={formAberto} aoFechar={() => setFormAberto(false)} unidadeEditando={unidadeEditando} />
        </LayoutPagina >
    )
}

export default UnidadesMedida