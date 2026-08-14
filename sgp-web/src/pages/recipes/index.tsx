import { messages } from "@/constants/messages";
import PageLayout from "@/layouts/page";
import { bakeryColors } from "@/theme";
import { Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RecipeList from "@/components/recipe/list";
import Container from "@/components/ui/container";
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import { useGetPageable } from "@/hooks/query";
import { ENDPOINTS } from "@/constants/endpoints";
import type { Receita } from "@/schemas/recipe";
import RecipePreview from "@/components/recipe/preview";
import FormularioReceita from "@/components/recipe/form";


const Receitas = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [filter, setFilter] = React.useState<Record<string, string>>({});
    const { data: receitas } = useGetPageable<Receita>({ endpoint: ENDPOINTS.RECEITA.BASE })

    console.log('receitas', receitas)

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
                    onClick={() => { setIsFormOpen(true) }}
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
                {receitas ? (
                    <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ gap: 2, alignItems: 'flex-start', minHeight: 0 }}>
                        <RecipeList receitas={receitas || []} />
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
            </Stack>
            <FormularioReceita
                open={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSubmit={() => { }}
            />
        </PageLayout>
    )

}

export default Receitas;