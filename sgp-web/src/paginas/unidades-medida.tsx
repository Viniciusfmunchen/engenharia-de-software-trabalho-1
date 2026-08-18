import FormularioUnidadeMedida from '@/componentes/unidade-medida/formulario'
import TabelaUnidadeMedida from '@/componentes/unidade-medida/tabela'
import { ROTAS_API } from '@/constantes/rotas-api'
import { useObterPaginado } from '@/hooks/consulta'
import LayoutPagina from '@/layouts/pagina'
import type { UnidadeMedida } from '@/schemas/unidade-medida'
import { coresPadaria } from '@/tema'
import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useState } from 'react'

const UnidadesMedida = () => {
    const [formAberto, setFormAberto] = useState<boolean>(false)
    const { dados: unidadesMedida } = useObterPaginado<UnidadeMedida>({ endpoint: ROTAS_API.UNIDADE.BASE })

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
                onClick={() => setFormAberto(true)} />}>
            <TabelaUnidadeMedida unidadesMedida={unidadesMedida} />
            <FormularioUnidadeMedida aberto={formAberto} aoFechar={() => setFormAberto(false)} />
        </LayoutPagina >
    )
}

export default UnidadesMedida