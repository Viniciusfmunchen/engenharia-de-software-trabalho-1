import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import Ingredientes from './paginas/ingredientes';
import LayoutAplicacao from './layouts/aplicacao';

const BoasVindas = lazy(() => import('@/paginas/boas-vindas'));
const Painel = lazy(() => import('@/paginas/painel'));
const Receitas = lazy(() => import('@/paginas/receitas'));
const Compras = lazy(() => import('@/paginas/compras'));
const Vendas = lazy(() => import('@/paginas/vendas'));
const Relatorios = lazy(() => import('@/paginas/relatorios'));
const Categorias = lazy(() => import('@/paginas/ingredientes/categorias'));

export const roteador = createBrowserRouter([
  {
    path: '/',
    Component: LayoutAplicacao,
    children: [
      {
        index: true,
        Component: BoasVindas,
      },
      {
         path: 'painel',
         Component: Painel,
      },
      {
        path: 'receitas',
        Component: Receitas,
      },
      {
        path: 'ingredientes',
        Component: Ingredientes,
      },
      {
        path: 'ingredientes/categorias',
        Component: Categorias,
      },
      {
        path: 'compras',
        Component: Compras,
      },
      {
        path: 'vendas',
        Component: Vendas,
      },
      {
        path: 'relatorios',
        Component: Relatorios,
      },
    ],
  },
]);

// Alias de exportação
export const router = roteador;
