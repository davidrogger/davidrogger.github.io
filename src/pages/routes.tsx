import { Navigate, RouteObject } from 'react-router-dom';

import ErrorPage from '@/pages/error-page';

import LayoutRoot from '@/components/layout-root';
import { Section } from '@/components/section';

import { Contact } from './contact';
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
            path: 'contact',
            element: <Contact />,
          },
        ]
      },
    ],
    errorElement: <ErrorPage />,
  },
];