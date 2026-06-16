import BreadRecipeFormModal from '@/components/bread-recipe/bread-recipe-form-modal';
import ProductionSimulation from '@/components/bread-recipe/production-simulation';
import Container from '@/components/ui/container';
import Tabs from '@/components/ui/tabs/tabs';
import { messages } from '@/constants/messages';
import PageLayout from '@/layouts/page';
import {
  breadIngredients,
  breadRecipes,
  calculateCostPerUnit,
  calculateEstimatedProfitPerUnit,
  calculateRecipeCost,
  formatCurrencyFromCents,
  getIngredientById,
} from '@/mock/breadRecipesMock';
import type { BreadRecipeFormValues } from '@/schemas/bakerySchemas';
import { bakeryColors } from '@/theme';
import type { BreadRecipe } from '@/types/bakery';
import { getNextId } from '@/utils/ids';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Chip, Divider, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (!hours) return `${remainingMinutes} min`;
  if (!remainingMinutes) return `${hours} h`;

  return `${hours} h ${remainingMinutes} min`;
};

const getRecipeIngredients = (recipe: BreadRecipe) =>
  recipe.ingredients
    .map((item) => {
      const ingredient = getIngredientById(item.ingredientId);

      return ingredient
        ? {
            ...item,
            ingredient,
          }
        : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

const RecipeSummary = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <Stack
    direction="row"
    sx={{
      alignItems: 'center',
      gap: 1,
      minWidth: 150,
      color: 'text.secondary',
    }}
  >
    {icon}
    <Stack>
      <Typography variant="caption">{label}</Typography>
      <Typography variant="subtitle2" color="text.primary">
        {value}
      </Typography>
    </Stack>
  </Stack>
);

const Recipes = () => {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState(() => [...breadRecipes]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(breadRecipes[0]?.id);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredRecipes = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase('pt-BR');

    if (!normalizedSearch) return recipes;

    return recipes.filter((recipe) => {
      const ingredients = getRecipeIngredients(recipe)
        .map((item) => item.ingredient.name)
        .join(' ');

      return `${recipe.name} ${ingredients}`.toLocaleLowerCase('pt-BR').includes(normalizedSearch);
    });
  }, [recipes, search]);

  const selectedRecipe =
    filteredRecipes.find((recipe) => recipe.id === selectedRecipeId) ?? filteredRecipes[0];
  const selectedIngredients = selectedRecipe ? getRecipeIngredients(selectedRecipe) : [];

  const handleAddRecipe = (values: BreadRecipeFormValues) => {
    const recipe: BreadRecipe = {
      id: getNextId(breadRecipes),
      name: values.name,
      salePriceInCents: Math.round(values.salePrice * 100),
      yieldUnits: values.yieldUnits,
      preparationTimeMinutes: values.preparationTimeMinutes,
      ingredients: values.ingredients,
    };

    breadRecipes.push(recipe);
    setRecipes([...breadRecipes]);
    setSelectedRecipeId(recipe.id);
  };

  const recipesContent = (
    <Stack spacing={2}>
      <Container>
        <TextField
          fullWidth
          size="small"
          label={messages.pages.recipes.searchLabel}
          placeholder={messages.pages.recipes.searchPlaceholder}
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

      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        sx={{
          gap: 2,
          alignItems: 'flex-start',
          minHeight: 0,
        }}
      >
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
              {filteredRecipes.length} {messages.pages.recipes.foundSuffix}
            </Typography>

            <Typography variant="caption" color="text.secondary">
              {messages.pages.recipes.selectForDetails}
            </Typography>
          </Stack>

          {filteredRecipes.map((recipe) => {
            const isSelected = selectedRecipe?.id === recipe.id;

            return (
              <Container
                key={recipe.id}
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
                  onClick={() => setSelectedRecipeId(recipe.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      setSelectedRecipeId(recipe.id);
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
                        {recipe.yieldUnits} {messages.pages.recipes.unitsPerRecipe}
                      </Typography>
                    </Stack>
                    <Chip size="small" label={formatCurrencyFromCents(recipe.salePriceInCents)} />
                  </Stack>

                  <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>
                    <Chip
                      size="small"
                      icon={<AccessTimeIcon />}
                      label={formatTime(recipe.preparationTimeMinutes)}
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

        <Stack
          sx={{
            flex: 1,
            width: '100%',
            position: { lg: 'sticky' },
            top: 0,
          }}
        >
          {selectedRecipe ? (
            <Container
              title={selectedRecipe.name}
              subtitle={`${selectedRecipe.yieldUnits} ${messages.pages.recipes.unitsPerRecipeFull}`}
              action={
                <Button
                  size="small"
                  startIcon={<ArrowBackIcon />}
                  onClick={() => setSelectedRecipeId(filteredRecipes[0]?.id)}
                  disabled={!search}
                >
                  {messages.actions.firstResult}
                </Button>
              }
            >
              <Stack spacing={2}>
                <Stack direction="row" sx={{ gap: 2, flexWrap: 'wrap' }}>
                  <RecipeSummary
                    icon={<AttachMoneyIcon fontSize="small" />}
                    label={messages.pages.recipes.salePrice}
                    value={formatCurrencyFromCents(selectedRecipe.salePriceInCents)}
                  />
                  <RecipeSummary
                    icon={<Inventory2Icon fontSize="small" />}
                    label={messages.pages.recipes.recipeCost}
                    value={formatCurrency(calculateRecipeCost(selectedRecipe))}
                  />
                  <RecipeSummary
                    icon={<AttachMoneyIcon fontSize="small" />}
                    label={messages.pages.recipes.costPerUnit}
                    value={formatCurrency(calculateCostPerUnit(selectedRecipe))}
                  />
                  <RecipeSummary
                    icon={<AccessTimeIcon fontSize="small" />}
                    label={messages.pages.recipes.preparation}
                    value={formatTime(selectedRecipe.preparationTimeMinutes)}
                  />
                </Stack>

                <Divider />

                <Stack spacing={1}>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}
                  >
                    <Typography variant="h6">{messages.common.ingredients}</Typography>
                    <Chip
                      color="success"
                      variant="outlined"
                      label={`${messages.pages.recipes.estimatedProfitPerUnit} ${formatCurrency(
                        calculateEstimatedProfitPerUnit(selectedRecipe),
                      )}`}
                    />
                  </Stack>

                  <Stack component="ul" sx={{ gap: 1, m: 0, p: 0, listStyle: 'none' }}>
                    {selectedIngredients.map(({ ingredient, quantity }) => (
                      <Stack
                        key={ingredient.id}
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
                          <Typography variant="body1">{ingredient.name}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {ingredient.category}
                          </Typography>
                        </Stack>
                        <Typography variant="subtitle2">
                          {quantity.toLocaleString('pt-BR')} {ingredient.unit}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Container>
          ) : (
            <Container>
              <Typography variant="body2" color="text.secondary">
                {messages.pages.recipes.empty}
              </Typography>
            </Container>
          )}
        </Stack>
      </Stack>
    </Stack>
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
          onClick={() => setIsFormOpen(true)}
        >
          {messages.actions.addRecipe}
        </Button>
      }
    >
      <>
        <Tabs
          tabs={[
            {
              label: messages.tabs.recipes,
              content: recipesContent,
            },
            {
              label: messages.tabs.simulateProduction,
              content: <ProductionSimulation />,
            },
          ]}
        />

        <BreadRecipeFormModal
          open={isFormOpen}
          ingredients={breadIngredients}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleAddRecipe}
        />
      </>
    </PageLayout>
  );
};

export default Recipes;
