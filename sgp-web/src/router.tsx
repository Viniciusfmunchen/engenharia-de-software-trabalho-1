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
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'recipes',
        element: <Recipes />,
      },
      {
        path: 'ingredients',
        element: <Ingredients />,
      },
      {
        path: 'purchases',
        element: <Purchases />,
      },
      {
        path: 'sales',
        element: <Sales />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
    ],
  },
]);
