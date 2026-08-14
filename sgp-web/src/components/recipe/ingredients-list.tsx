
import type { IngredienteReceita } from "@/schemas/ingredient"
import { Stack, Typography } from "@mui/material"

export const RecipeIngredientsList = ({ ingredientes }: { ingredientes: IngredienteReceita[] }) => {
    return (
        <Stack component="ul" sx={{ gap: 2, listStyle: 'none', p: 0 }}>
            {ingredientes.map((ingrediente) => (
                console.log(ingrediente),
                <Stack
                    key={ingrediente.idIngrediente}
                    component="li"
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        gap: 1,
                        borderBottom: '1px solid #f1e7d8',
                        py: 1,
                    }}
                >
                    <Stack>
                        <Typography variant="body1">{ingrediente.nomeIngrediente}</Typography>
                        <Typography variant="caption" color="text.secondary">
                            {ingrediente.categoriaIngrediente.nomeCategoria}
                        </Typography>
                    </Stack>
                    <Typography variant="subtitle2">
                        {ingrediente.quantidade.toLocaleString('pt-BR')} {ingrediente.unidadeIngrediente.abreviacaoUnidade}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    )
}