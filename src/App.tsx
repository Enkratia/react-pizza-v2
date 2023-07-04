import React, { Suspense } from 'react';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './scss/app.scss';

import Loadable from 'react-loadable';

const NotFound = React.lazy(() => import(/* webpackChunkName: "[NotFound]" */ './pages/NotFound'));
const FullPizza = React.lazy(
  () => import(/* webpackChunkName: "[FullPizza]" */ './pages/FullPizza'),
);

const Cart = Loadable({
  loader: () => import('./pages/Cart'),
  loading: () => <div>Loading...</div>,
});

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={'Loading ...'}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={'Loading ...'}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
