import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom';

import ErrorPage from '@/assets/pages/error-page';

import { applyLayout } from '@/components/layout-root';
import './index.css';

import App from './App';

const routes:RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/pt-br' />,
  },
  {
    path: '/:language',
    element: applyLayout(<App />),
    errorElement: applyLayout(<ErrorPage />),
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
