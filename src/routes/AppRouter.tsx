import { RouterProvider, createBrowserRouter } from 'react-router';

import { MainLayout } from '@/layouts';
import { routePaths } from '@/routes/paths';
import { lazyRoute, withFallback } from '@/routes/routeHelpers.tsx';

const appRouter = createBrowserRouter([
  {
    path: routePaths.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        ...lazyRoute(() => import('@/pages/HomePage')),
      },
    ],
  },
  {
    path: routePaths.notFound,
    ...lazyRoute(() => import('@/pages/NotFound')),
  },
]);

export default function AppRouter() {
  return withFallback(<RouterProvider router={appRouter} />);
}
