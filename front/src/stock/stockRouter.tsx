import { RouteObject } from 'react-router-dom';
import ListView from './views/ListView';
import AddView from './views/AddView';

export const stockRoutes: RouteObject[] = [
  {
    path: 'stock',
    element: <ListView />,
  },
  {
    path: 'stock/add',
    element: <AddView />,
  },
];
