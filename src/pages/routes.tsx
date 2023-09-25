import { Navigate, RouteObject } from 'react-router-dom';

import ErrorPage from '@/pages/error-page';

import LayoutRoot from '@/components/layout-root';
import { Section } from '@/components/section';

import { Home } from './home';
import { Projects } from './projects';

export const routes:RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/pt-br' />,
  },
  {
    path: '/:language',
    element: <LayoutRoot />,
    children: [
      {
        path: '/:language',
        element: <Section />,
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: 'projects',
            element: <Projects />,
          },
          {
            path: 'projects/fullstack',
            element: <Projects />,
          },
          {
            path: 'projects/backend',
            element: <Projects />,
          },
          {
            path: 'projects/frontend',
            element: <Projects />,
          },
        ]
      },
    ],
    errorElement: <ErrorPage />,
  },
];