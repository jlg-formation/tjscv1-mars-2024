import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { stockRoutes } from './stock/stockRouter';
import HomeView from './views/HomeView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomeView />,
      },
      {
        path: 'legal',
        lazy: () =>
          import('./views/LegalView').then((m) => ({ Component: m.default })),
      },
      ...stockRoutes,
    ],
  },
]);
