import { Button, Chip, Divider, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router";
import Container from "../../ui/container";
import { messages } from "@/constants/messages";
import { formatCurrency } from "@/mock/operationsMock";
import { Edit } from "@mui/icons-material";
import ProductionSimulation from "./production-simulation";
import { useGet } from "@/hooks/query";
import { ENDPOINTS } from "@/constants/endpoints";
import type { Receita } from "@/schemas/recipe";
import { RecipeIngredientsList } from "../ingredients-list";
import RecipeSummary from "../summary";

const RecipePreview = () => {
    const [searchParams] = useSearchParams();

    const selectedRecipeId = searchParams.get('recipeId');
    const { data: receita, isLoading } = useGet<Receita>({ endpoint: `${ENDPOINTS.RECEITA.BASE}/${selectedRecipeId}`, enabled: !!selectedRecipeId })

    if (!receita || !selectedRecipeId) return '#Nenhuma receita selecionada#\n#Selecione uma receita na lista à esquerda para visualizar os detalhes.#';

    if (isLoading) return '#Carregando receita...#';

    return (
        <Container
            title={receita.nomeReceita}
            subtitle={`${receita.rendimento ?? 0} ${messages.pages.recipes.unitsPerRecipeFull}`}
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
            <RecipeSummary receita={receita} />
            <Divider />
            {receita.ingredientes.length > 0 && (
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
                    <RecipeIngredientsList ingredientes={receita.ingredientes} />
                </Stack>)}
            <ProductionSimulation />
        </Container >
    )
}

export default RecipePreview;