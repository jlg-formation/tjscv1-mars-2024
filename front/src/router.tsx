import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { stockRoute } from './stock/stockRouter';
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
      stockRoute,
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
