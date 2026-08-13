import { Button, Chip, Divider, Stack, TextField, Typography } from "@mui/material";
import { useSearchParams } from "react-router";
import Container from "../../ui/container";
import { useApiQuery } from "@/hooks/use-api-query";
import type { Recipe } from "@/types/recipe";
import type { RecipeFormValues } from "@/schemas/bakerySchemas";
import { createCrudService } from "@/services/crud";
import { messages } from "@/constants/messages";
import { formatCurrency } from "@/mock/operationsMock";
import { Edit } from "@mui/icons-material";
import { RecipeIngredientsList } from "../ingredients-list";
import ProductionSimulation from "./production-simulation";
import RecipeSummary from "../summary";

const RecipePreview = () => {
    const [searchParams] = useSearchParams();

    const selectedRecipeId = searchParams.get('recipeId');
    const recipeService = createCrudService<Recipe, RecipeFormValues>('recipe');
    const { data: recipe, isLoading } = useApiQuery<Recipe>(
        ['recipes', selectedRecipeId],
        () => recipeService.getById(Number(selectedRecipeId)),
        {
            enabled: !!selectedRecipeId,
        }
    );

    if (!recipe || !selectedRecipeId) return '#Nenhuma receita selecionada#\n#Selecione uma receita na lista à esquerda para visualizar os detalhes.#';

    if (isLoading) return '#Carregando receita...#';

    return (
        <Container
            title={recipe.name}
            subtitle={`${recipe.yieldUnits ?? 0} ${messages.pages.recipes.unitsPerRecipeFull}`}
            action={
                <Button
                    size="small"
                    startIcon={<Edit />}
                    onClick={() => { }}
                >
                    #Editar#
                </Button>
            }
            sx={{ width: '100%', height: '100%' }}
            contentSx={{ gap: 1 }}
        >
            <RecipeSummary recipe={recipe} />
            <Divider />
            {recipe.ingredients.length > 0 && (
                <Stack>
                    <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}
                    >
                        <Typography variant="h6">{messages.common.ingredients}</Typography>
                        <Chip
                            color="success"
                            variant="outlined"
                            label={`${messages.pages.recipes.estimatedProfitPerUnit} ${formatCurrency(0)}`}
                        />
                    </Stack>
                    <RecipeIngredientsList ingredients={recipe.ingredients} />
                </Stack>)}
            <ProductionSimulation />
        </Container >
    )
}

export default RecipePreview;