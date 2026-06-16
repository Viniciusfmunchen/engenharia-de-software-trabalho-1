import IngredientFormModal from '@/components/ingredients/ingredient-form-modal';
import IngredientsTable from '@/components/ingredients/table';
import Card from '@/components/ui/card';
import Container from '@/components/ui/container';
import { messages } from '@/constants/messages';
import PageLayout from '@/layouts/page';
import { breadIngredients } from '@/mock/breadRecipesMock';
import { formatCurrency } from '@/mock/operationsMock';
import type { IngredientFormValues } from '@/schemas/bakerySchemas';
import { bakeryColors } from '@/theme';
import type { Ingredient } from '@/types/bakery';
import { getNextId } from '@/utils/ids';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

const Ingredients = () => {
  const [search, setSearch] = useState('');
  const [ingredients, setIngredients] = useState(() => [...breadIngredients]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const lowStockIngredients = useMemo(
    () =>
      ingredients.filter(
        (ingredient) => ingredient.stockQuantity <= ingredient.minStockQuantity,
      ),
    [ingredients],
  );
  const summary = useMemo(
    () => ({
      totalIngredients: ingredients.length,
      lowStockCount: lowStockIngredients.length,
      criticalStockCount: ingredients.filter(
        (ingredient) => ingredient.stockQuantity <= ingredient.minStockQuantity * 0.5,
      ).length,
      stockValue: ingredients.reduce(
        (sum, ingredient) => sum + ingredient.stockQuantity * ingredient.costPerUnit,
        0,
      ),
    }),
    [ingredients, lowStockIngredients],
  );

  const normalizedSearch = search.trim().toLocaleLowerCase('pt-BR');
  const filteredIngredients = normalizedSearch
    ? ingredients.filter((ingredient) =>
        `${ingredient.name} ${ingredient.category}`
          .toLocaleLowerCase('pt-BR')
          .includes(normalizedSearch),
      )
    : ingredients;

  const handleAddIngredient = (values: IngredientFormValues) => {
    const ingredient: Ingredient = {
      id: getNextId(breadIngredients),
      ...values,
    };

    breadIngredients.push(ingredient);
    setIngredients([...breadIngredients]);
  };

  return (
    <PageLayout
      title={messages.pages.ingredients.title}
      aside={
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: bakeryColors.sidebar,
            color: bakeryColors.textLight,
            '&:hover': { bgcolor: bakeryColors.sidebarSelectedHover },
          }}
          onClick={() => setIsFormOpen(true)}
        >
          {messages.actions.addIngredient}
        </Button>
      }
    >
      <>
        <Stack spacing={2}>
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 1 }}>
            <Card
              title={messages.pages.ingredients.registered}
              content={summary.totalIngredients.toLocaleString('pt-BR')}
              info={messages.pages.ingredients.availableItems}
            />
            <Card
              title={messages.pages.ingredients.lowStock}
              content={summary.lowStockCount.toLocaleString('pt-BR')}
              info={`${summary.criticalStockCount} ${messages.pages.ingredients.criticalLevel}`}
            />
            <Card
              title={messages.pages.ingredients.stockValue}
              content={formatCurrency(summary.stockValue)}
              info={messages.pages.ingredients.stockValueInfo}
            />
          </Stack>

          {lowStockIngredients.length > 0 && (
            <Container
              title={messages.pages.ingredients.stockAttention}
              subtitle={lowStockIngredients.map((ingredient) => ingredient.name).join(', ')}
            >
              <Typography variant="body2" color="text.secondary">
                {messages.pages.ingredients.stockAttentionInfo}
              </Typography>
            </Container>
          )}

          <Container>
            <TextField
              fullWidth
              size="small"
              label={messages.pages.ingredients.searchLabel}
              placeholder={messages.pages.ingredients.searchPlaceholder}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
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

          <IngredientsTable rows={filteredIngredients} />
        </Stack>

        <IngredientFormModal
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddIngredient}
        />
      </>
    </PageLayout>
  );
};

export default Ingredients;
