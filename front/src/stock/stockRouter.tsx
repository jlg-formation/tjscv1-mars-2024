import { RouteObject } from 'react-router-dom';

export const stockRoutes: RouteObject[] = [
  {
    path: 'stock',
    lazy: () =>
      import('./views/ListView').then((m) => ({ Component: m.default })),
  },
  {
    path: 'stock/add',
    lazy: () =>
      import('./views/AddView').then((m) => ({ Component: m.default })),
  },
];
