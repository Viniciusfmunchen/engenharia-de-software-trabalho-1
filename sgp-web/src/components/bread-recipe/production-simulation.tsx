import Container from '@/components/ui/container';
import { messages } from '@/constants/messages';
import { breadRecipes, getIngredientById } from '@/mock/breadRecipesMock';
import { formatCurrency, getRecipeById } from '@/mock/operationsMock';
import { bakeryColors } from '@/theme';
import { Button, Chip, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const ProductionSimulation = () => {
  const [recipeId, setRecipeId] = useState(String(breadRecipes[0]?.id ?? ''));
  const [batches, setBatches] = useState('1');

  const selectedRecipe = getRecipeById(Number(recipeId));
  const batchCount = Math.max(Number(batches) || 0, 0);

  const simulation =
    selectedRecipe && batchCount
      ? selectedRecipe.ingredients
          .map((item) => {
            const ingredient = getIngredientById(item.ingredientId);

            if (!ingredient) return null;

            const requiredQuantity = item.quantity * batchCount;
            const missingQuantity = Math.max(requiredQuantity - ingredient.stockQuantity, 0);

            return {
              ingredient,
              requiredQuantity,
              missingQuantity,
              hasEnoughStock: missingQuantity === 0,
              remainingStock: ingredient.stockQuantity - requiredQuantity,
              cost: requiredQuantity * ingredient.costPerUnit,
              maxBatches: Math.floor(ingredient.stockQuantity / item.quantity),
            };
          })
          .filter((item): item is NonNullable<typeof item> => item !== null)
      : [];

  const totalCost = simulation.reduce((sum, item) => sum + item.cost, 0);
  const canProduce = simulation.length > 0 && simulation.every((item) => item.hasEnoughStock);
  const maxPossibleBatches = simulation.length
    ? Math.min(...simulation.map((item) => item.maxBatches))
    : 0;

  return (
    <Stack sx={{ gap: 2 }}>
      <Typography variant="h3">{messages.simulation.parameters}</Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: 2, alignItems: 'center' }}>
        <TextField
          select
          fullWidth
          size="small"
          label={messages.simulation.breadType}
          value={recipeId}
          onChange={(event) => setRecipeId(event.target.value)}
        >
          {breadRecipes.map((recipe) => (
            <MenuItem key={recipe.id} value={String(recipe.id)}>
              {recipe.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          size="small"
          label={messages.simulation.batches}
          type="number"
          value={batches}
          onChange={(event) => setBatches(event.target.value)}
          slotProps={{ htmlInput: { min: 0 } }}
        />
        <Button
          variant="contained"
          disabled={!selectedRecipe || !batchCount}
          sx={{
            minHeight: 40,
            minWidth: 180,
            bgcolor: bakeryColors.sidebar,
            color: bakeryColors.textLight,
            '&:hover': { bgcolor: bakeryColors.sidebarSelectedHover },
          }}
        >
          {messages.actions.simulateProduction}
        </Button>
      </Stack>

      <Container
        title={
          selectedRecipe
            ? `${selectedRecipe.name} (${batchCount} ${messages.simulation.batchesSuffix})`
            : messages.simulation.title
        }
        subtitle={`${messages.simulation.estimatedCost} ${formatCurrency(totalCost)} · ${messages.simulation.maxPossible} ${maxPossibleBatches} ${messages.simulation.batchesSuffix}`}
        action={
          <Chip
            size="small"
            color={canProduce ? 'success' : 'error'}
            label={canProduce ? messages.simulation.enough : messages.simulation.notEnough}
            variant="outlined"
          />
        }
      >
        <Stack component="ul" sx={{ listStyle: 'none', m: 0, p: 0, gap: 1 }}>
          {simulation.map((item) => (
            <Stack
              key={item.ingredient.id}
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
                <Typography variant="body1">{item.ingredient.name}</Typography>
                <Typography
                  variant="caption"
                  color={item.hasEnoughStock ? 'text.secondary' : 'error'}
                >
                  {item.hasEnoughStock
                    ? `${messages.simulation.stockAfterProduction} ${item.remainingStock.toLocaleString('pt-BR')} ${item.ingredient.unit}`
                    : `${messages.simulation.missing} ${item.missingQuantity.toLocaleString('pt-BR')} ${item.ingredient.unit}`}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: 'center', gap: 1, justifyContent: 'flex-end' }}
              >
                <Chip
                  size="small"
                  color={item.hasEnoughStock ? 'success' : 'error'}
                  label={item.hasEnoughStock ? messages.simulation.ok : messages.simulation.missingShort}
                  variant="outlined"
                />
                <Typography variant="subtitle2">
                  {item.requiredQuantity.toLocaleString('pt-BR')} {item.ingredient.unit}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductionSimulation;
