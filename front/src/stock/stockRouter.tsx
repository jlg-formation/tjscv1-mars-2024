import { RouteObject } from 'react-router-dom';

export const stockRoute: RouteObject = {
  path: 'stock',
  lazy: () =>
    import('./views/StockView').then((m) => ({ Component: m.default })),
  children: [
    {
      path: '',
      lazy: () =>
        import('./views/ListView').then((m) => ({ Component: m.default })),
    },
    {
      path: 'add',
      lazy: () =>
        import('./views/AddView').then((m) => ({ Component: m.default })),
    },
  ],
};
