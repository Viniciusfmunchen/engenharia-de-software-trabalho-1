import type { Ingredient } from "@/types/ingredient"
import { Stack, Typography } from "@mui/material"

interface TempIngredient {
    id: number;
    ingredient: Ingredient;
    quantity: number;
}

export const RecipeIngredientsList = ({ ingredients }: { ingredients: TempIngredient[] }) => {
    return (
        <Stack component="ul" sx={{ gap: 2, listStyle: 'none', p: 0 }}>
            {ingredients.map((ingredient) => (
                console.log(ingredient),
                <Stack
                    key={ingredient.ingredient.ingredientId}
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
                        <Typography variant="body1">{ingredient.ingredient.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                            {ingredient.ingredient.category.name}
                        </Typography>
                    </Stack>
                    <Typography variant="subtitle2">
                        {ingredient.quantity.toLocaleString('pt-BR')} {ingredient.ingredient.measuringUnit.symbol}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    )
}