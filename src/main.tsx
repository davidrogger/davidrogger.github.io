import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LayoutRoot from '@/components/LayoutRoot';
import './index.css';

import App from './App';

const homeElements = (
  <LayoutRoot>
    <App />
  </LayoutRoot>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: homeElements,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
