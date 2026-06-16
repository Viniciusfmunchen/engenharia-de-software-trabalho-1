import {
  breadIngredients,
  breadRecipes,
  calculateCostPerUnit,
  formatCurrencyFromCents,
  getIngredientById,
} from './breadRecipesMock';
import { counterCustomerName } from './entitiesMock';
import type {
  BreadRecipe,
  BreadSalesRow,
  CustomerSalesRow,
  Purchase,
  PurchaseRow,
  Sale,
} from '@/types/bakery';

export const salesMock: Sale[] = [
  { id: 1, date: '2026-01-08', buyerName: 'Padaria Central', recipeId: 1, quantity: 420, paymentMethod: 'Pix' },
  { id: 2, date: '2026-01-12', buyerName: 'Mercado Aurora', recipeId: 14, quantity: 260, paymentMethod: 'Cartão' },
  { id: 3, date: '2026-02-03', buyerName: 'Café Jardim', recipeId: 11, quantity: 95, paymentMethod: 'Pix' },
  { id: 4, date: '2026-02-18', buyerName: 'Mercado Aurora', recipeId: 2, quantity: 88, paymentMethod: 'Cartão' },
  { id: 5, date: '2026-03-02', buyerName: 'Empório São Bento', recipeId: 20, quantity: 46, paymentMethod: 'Pix' },
  { id: 6, date: '2026-03-15', buyerName: 'Café Jardim', recipeId: 13, quantity: 150, paymentMethod: 'Dinheiro' },
  { id: 7, date: '2026-04-06', buyerName: 'Hotel Primavera', recipeId: 47, quantity: 360, paymentMethod: 'Pix' },
  { id: 8, date: '2026-04-21', buyerName: 'Hotel Primavera', recipeId: 48, quantity: 310, paymentMethod: 'Pix' },
  { id: 9, date: '2026-05-09', buyerName: 'Mercearia União', recipeId: 7, quantity: 140, paymentMethod: 'Cartão' },
  { id: 10, date: '2026-05-20', buyerName: 'Café Jardim', recipeId: 18, quantity: 72, paymentMethod: 'Pix' },
  { id: 11, date: '2026-06-01', buyerName: 'Padaria Central', recipeId: 1, quantity: 510, paymentMethod: 'Pix' },
  { id: 12, date: '2026-06-04', buyerName: 'Empório São Bento', recipeId: 33, quantity: 54, paymentMethod: 'Cartão' },
  { id: 13, date: '2026-06-08', buyerName: 'Mercado Aurora', recipeId: 29, quantity: 120, paymentMethod: 'Pix' },
  { id: 14, date: '2026-06-11', buyerName: 'Restaurante Villa', recipeId: 46, quantity: 80, paymentMethod: 'Dinheiro' },
  { id: 15, date: '2026-06-13', buyerName: 'Restaurante Villa', recipeId: 42, quantity: 65, paymentMethod: 'Pix' },
  { id: 16, date: '2026-06-15', buyerName: 'Mercearia União', recipeId: 8, quantity: 160, paymentMethod: 'Cartão' },
  { id: 17, date: '2026-06-15', buyerName: counterCustomerName, recipeId: 1, quantity: 180, paymentMethod: 'Dinheiro' },
  { id: 18, date: '2026-06-15', buyerName: counterCustomerName, recipeId: 14, quantity: 120, paymentMethod: 'Pix' },
  { id: 19, date: '2026-06-16', buyerName: counterCustomerName, recipeId: 8, quantity: 95, paymentMethod: 'Cartão' },
];

export const purchasesMock: Purchase[] = [
  { id: 1, date: '2026-01-04', supplierName: 'Moinho Boa Safra', ingredientId: 1, quantity: 18000, unitCost: 0.0042, status: 'Recebida' },
  { id: 2, date: '2026-01-07', supplierName: 'Laticínios Serra', ingredientId: 17, quantity: 8000, unitCost: 0.0047, status: 'Recebida' },
  { id: 3, date: '2026-02-02', supplierName: 'Distribuidora Alfa', ingredientId: 8, quantity: 700, unitCost: 0.055, status: 'Recebida' },
  { id: 4, date: '2026-02-11', supplierName: 'Queijos Mantiqueira', ingredientId: 51, quantity: 2200, unitCost: 0.03, status: 'Recebida' },
  { id: 5, date: '2026-03-01', supplierName: 'Moinho Boa Safra', ingredientId: 2, quantity: 9000, unitCost: 0.0062, status: 'Recebida' },
  { id: 6, date: '2026-03-18', supplierName: 'Grãos do Vale', ingredientId: 31, quantity: 2500, unitCost: 0.0095, status: 'Recebida' },
  { id: 7, date: '2026-04-04', supplierName: 'Laticínios Serra', ingredientId: 21, quantity: 1600, unitCost: 0.038, status: 'Recebida' },
  { id: 8, date: '2026-04-16', supplierName: 'Empório Temperos', ingredientId: 57, quantity: 250, unitCost: 0.041, status: 'Recebida' },
  { id: 9, date: '2026-05-05', supplierName: 'Hortifruti Bela Vista', ingredientId: 29, quantity: 1800, unitCost: 0.0052, status: 'Recebida' },
  { id: 10, date: '2026-05-23', supplierName: 'Charcutaria Roma', ingredientId: 53, quantity: 1400, unitCost: 0.029, status: 'Recebida' },
  { id: 11, date: '2026-06-03', supplierName: 'Moinho Boa Safra', ingredientId: 1, quantity: 22000, unitCost: 0.0043, status: 'Recebida' },
  { id: 12, date: '2026-06-10', supplierName: 'Queijos Mantiqueira', ingredientId: 49, quantity: 2400, unitCost: 0.033, status: 'Pendente' },
  { id: 13, date: '2026-06-14', supplierName: 'Empório Temperos', ingredientId: 56, quantity: 180, unitCost: 0.047, status: 'Pendente' },
];

export const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export const formatDate = (date: string) => new Date(`${date}T00:00:00`).toLocaleDateString('pt-BR');

export const getRecipeById = (recipeId: number): BreadRecipe | undefined =>
  breadRecipes.find((recipe) => recipe.id === recipeId);

export const getSaleRevenue = (sale: Sale) => {
  const recipe = getRecipeById(sale.recipeId);

  return recipe ? (recipe.salePriceInCents / 100) * sale.quantity : 0;
};

export const getSaleProfit = (sale: Sale) => {
  const recipe = getRecipeById(sale.recipeId);

  return recipe ? (recipe.salePriceInCents / 100 - calculateCostPerUnit(recipe)) * sale.quantity : 0;
};

export const getLowStockIngredients = () =>
  breadIngredients.filter((ingredient) => ingredient.stockQuantity <= ingredient.minStockQuantity);

export const getCriticalStockIngredients = () =>
  breadIngredients.filter((ingredient) => ingredient.stockQuantity <= ingredient.minStockQuantity * 0.5);

export const getPurchaseRows = (): PurchaseRow[] =>
  purchasesMock
    .map((purchase) => {
      const ingredient = getIngredientById(purchase.ingredientId);

      return ingredient
        ? {
            ...purchase,
            ingredient,
            totalCost: purchase.quantity * purchase.unitCost,
          }
        : null;
    })
    .filter((purchase): purchase is PurchaseRow => purchase !== null);

export const getBreadSalesRows = (): BreadSalesRow[] => {
  const rowsByRecipe = new Map<number, BreadSalesRow>();

  salesMock.forEach((sale) => {
    const recipe = getRecipeById(sale.recipeId);

    if (!recipe) return;

    const current = rowsByRecipe.get(recipe.id) ?? {
      id: recipe.id,
      breadName: recipe.name,
      quantity: 0,
      revenue: 0,
      estimatedProfit: 0,
    };

    rowsByRecipe.set(recipe.id, {
      ...current,
      quantity: current.quantity + sale.quantity,
      revenue: current.revenue + getSaleRevenue(sale),
      estimatedProfit: current.estimatedProfit + getSaleProfit(sale),
    });
  });

  return [...rowsByRecipe.values()].sort((a, b) => b.quantity - a.quantity);
};

export const getCustomerSalesRows = (): CustomerSalesRow[] => {
  const rowsByBuyer = new Map<string, CustomerSalesRow>();

  salesMock.forEach((sale) => {
    const current = rowsByBuyer.get(sale.buyerName) ?? {
      id: sale.buyerName,
      buyerName: sale.buyerName,
      orders: 0,
      quantity: 0,
      revenue: 0,
    };

    rowsByBuyer.set(sale.buyerName, {
      ...current,
      orders: current.orders + 1,
      quantity: current.quantity + sale.quantity,
      revenue: current.revenue + getSaleRevenue(sale),
    });
  });

  return [...rowsByBuyer.values()].sort((a, b) => b.revenue - a.revenue);
};

export const getSalesSummary = () => {
  const revenue = salesMock.reduce((total, sale) => total + getSaleRevenue(sale), 0);
  const profit = salesMock.reduce((total, sale) => total + getSaleProfit(sale), 0);
  const quantity = salesMock.reduce((total, sale) => total + sale.quantity, 0);
  const breadRows = getBreadSalesRows();
  const bestBread = [...breadRows].sort((a, b) => b.quantity - a.quantity)[0];
  const lowestBread = [...breadRows].sort((a, b) => a.quantity - b.quantity)[0];
  const mostProfitableBread = [...breadRows].sort((a, b) => b.estimatedProfit - a.estimatedProfit)[0];

  return {
    revenue,
    profit,
    quantity,
    orders: salesMock.length,
    averageTicket: salesMock.length ? revenue / salesMock.length : 0,
    bestBread,
    lowestBread,
    mostProfitableBread,
  };
};

export const getPurchasesSummary = () => {
  const rows = getPurchaseRows();
  const total = rows.reduce((sum, purchase) => sum + purchase.totalCost, 0);
  const pending = rows.filter((purchase) => purchase.status === 'Pendente');

  return {
    total,
    count: rows.length,
    pendingCount: pending.length,
    pendingTotal: pending.reduce((sum, purchase) => sum + purchase.totalCost, 0),
    suppliers: new Set(rows.map((purchase) => purchase.supplierName)).size,
  };
};

export const getStockSummary = () => {
  const lowStock = getLowStockIngredients();
  const stockValue = breadIngredients.reduce(
    (sum, ingredient) => sum + ingredient.stockQuantity * ingredient.costPerUnit,
    0,
  );

  return {
    totalIngredients: breadIngredients.length,
    lowStockCount: lowStock.length,
    criticalStockCount: getCriticalStockIngredients().length,
    stockValue,
  };
};

export const getSalePriceLabel = (recipeId: number) => {
  const recipe = getRecipeById(recipeId);

  return recipe ? formatCurrencyFromCents(recipe.salePriceInCents) : formatCurrency(0);
};
