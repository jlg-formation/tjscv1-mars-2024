import { createBrowserRouter } from 'react-router-dom';
import HomeView from './views/HomeView';
import LegalView from './views/LegalView';
import App from './App';

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
        element: <LegalView />,
      },
    ],
  },
]);
