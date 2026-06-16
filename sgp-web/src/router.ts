import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import Ingredients from './pages/ingredients';
import AppLayout from './layouts/app';

const Welcome = lazy(() => import('@/pages/welcome'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const Recipes = lazy(() => import('@/pages/recipes'));
const Purchases = lazy(() => import('@/pages/purchases'));
const Sales = lazy(() => import('@/pages/sales'));
const Reports = lazy(() => import('@/pages/reports'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Welcome,
      },
      {
        path: 'dashboard',
        Component: Dashboard,
      },
      {
        path: 'recipes',
        Component: Recipes,
      },
      {
        path: 'ingredients',
        Component: Ingredients,
      },
      {
        path: 'purchases',
        Component: Purchases,
      },
      {
        path: 'sales',
        Component: Sales,
      },
      {
        path: 'reports',
        Component: Reports,
      },
    ],
  },
]);
