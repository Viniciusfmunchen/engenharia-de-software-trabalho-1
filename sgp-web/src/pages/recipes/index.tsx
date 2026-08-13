import { messages } from "@/constants/messages";
import PageLayout from "@/layouts/page";
import { bakeryColors } from "@/theme";
import { Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { createCrudService } from "@/services/crud";

import { useApiQuery } from "@/hooks/use-api-query";
import type { Recipe } from "@/types/recipe";
import type { RecipeFormValues } from "@/schemas/bakerySchemas";
import RecipeList from "@/components/recipe/list";
import Container from "@/components/ui/container";
import SearchIcon from '@mui/icons-material/Search';
import RecipePreview from "@/components/recipe/preview";
import React from "react";

const Recipes = () => {
    /* const [isFormOpen, setIsFormOpen] = useState(false); */
    const [filter, setFilter] = React.useState<Record<string, string>>({});
    const recipeService = createCrudService<Recipe, RecipeFormValues>('recipe');
    const { data: recipes } = useApiQuery<Recipe[]>(
        ['recipes', filter],
        () => recipeService.list(filter),
        {
            select: (response: any) => response.content as Recipe[],
        }
    );

    return (
        <PageLayout
            title={messages.pages.recipes.title}
            aside={
                <Button
                    variant="contained"
                    startIcon={<RestaurantMenuIcon />}
                    sx={{
                        bgcolor: bakeryColors.sidebar,
                        color: bakeryColors.textLight,
                        '&:hover': {
                            bgcolor: bakeryColors.sidebarSelectedHover,
                        },
                    }}
                    onClick={() => {/* setIsFormOpen(true) */ }}
                >
                    {messages.actions.addRecipe}
                </Button>
            }
        >
            <Stack spacing={2}>
                <Container>
                    <TextField
                        fullWidth
                        size="small"
                        label={messages.pages.recipes.searchLabel}
                        placeholder={messages.pages.recipes.searchPlaceholder}
                        value={filter.name}
                        onChange={(event) => setFilter({ ...filter, name: event.target.value })}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Container>
                {recipes ? (
                    <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ gap: 2, alignItems: 'flex-start', minHeight: 0 }}>
                        <RecipeList recipes={recipes || []} />
                        <RecipePreview />
                    </Stack>
                ) : (
                    <Container>
                        <Stack spacing={2}>
                            <Stack sx={{ alignItems: 'center', justifyContent: 'center', height: 200 }}>
                                <Typography>{messages.pages.recipes.empty}</Typography>
                            </Stack>
                        </Stack>
                    </Container>
                )}

                {/* <BreadRecipeFormModal
                    open={isFormOpen}
                    ingredients={breadIngredients}
                    onClose={() => setIsFormOpen(false)}
                    onSubmit={() => { }}
                /> */}
            </Stack>
        </PageLayout>
    )

}

export default Recipes;