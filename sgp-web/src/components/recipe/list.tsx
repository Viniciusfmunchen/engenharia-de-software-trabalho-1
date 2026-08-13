import Container from '@/components/ui/container';
import { messages } from '@/constants/messages';
import { formatCurrencyFromCents } from '@/mock/breadRecipesMock';
import { bakeryColors } from '@/theme';
import type { Recipe } from '@/types/recipe';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import { Chip, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'react-router';

export const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

export const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (!hours) return `${remainingMinutes} min`;
    if (!remainingMinutes) return `${hours} h`;

    return `${hours} h ${remainingMinutes} min`;
};

interface Props {
    recipes: Recipe[];
}

const RecipeList = ({ recipes }: Props) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const selectedRecipeId = searchParams.get('recipeId');

    const setSelectedRecipeId = (id: number) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            next.set('recipeId', String(id));
            return next;
        });
    };

    return (
        <Stack
            sx={{
                width: { xs: '100%', lg: 420 },
                maxHeight: { lg: 'calc(100vh - 278px)' },
                overflowY: { lg: 'auto' },
                pr: { lg: 0.5 },
                gap: 1,
            }}
        >
            <Stack
                direction="row"
                sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                    position: { lg: 'sticky' },
                    top: 0,
                    zIndex: 1,
                    bgcolor: bakeryColors.pageBackground,
                    pb: 0.5,
                    flexShrink: 0,
                }}
            >
                <Typography variant="caption" color="text.secondary">
                    {recipes.length} {messages.pages.recipes.foundSuffix}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                    {messages.pages.recipes.selectForDetails}
                </Typography>
            </Stack>

            {recipes?.map((recipe) => {
                const isSelected = selectedRecipeId === String(recipe.recipeId);

                return (
                    <Container
                        key={recipe.recipeId}
                        sx={{
                            bgcolor: isSelected ? '#fffaf2' : 'background.paper',
                            borderColor: isSelected ? bakeryColors.accent : '#eadfce',
                            cursor: 'pointer',
                            flexShrink: 0,
                            transition: 'background-color 160ms ease, border-color 160ms ease',
                            '&:hover': {
                                bgcolor: '#fffaf2',
                                borderColor: bakeryColors.accent,
                            },
                        }}
                    >
                        <Stack
                            role="button"
                            tabIndex={0}
                            onClick={() => setSelectedRecipeId(recipe.recipeId)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    setSelectedRecipeId(recipe.recipeId);
                                }
                            }}
                            sx={{ gap: 1, outline: 0 }}
                        >
                            <Stack
                                direction="row"
                                sx={{ alignItems: 'flex-start', justifyContent: 'space-between', gap: 1 }}
                            >
                                <Stack sx={{ gap: 0.5 }}>
                                    <Typography variant="h6">{recipe.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {recipe.yieldUnits ?? 0} {messages.pages.recipes.unitsPerRecipe}
                                    </Typography>
                                </Stack>
                                <Chip size="small" label={formatCurrencyFromCents(recipe.salePrice)} />
                            </Stack>

                            <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>
                                <Chip
                                    size="small"
                                    icon={<AccessTimeIcon />}
                                    label={formatTime(recipe.preparationTime)}
                                />
                                <Chip
                                    size="small"
                                    icon={<Inventory2Icon />}
                                    label={`${recipe.ingredients.length} ${messages.common.ingredients.toLocaleLowerCase('pt-BR')}`}
                                />
                            </Stack>
                        </Stack>
                    </Container>
                );
            })}
        </Stack>
    );
};

export default RecipeList;
