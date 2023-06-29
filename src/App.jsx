import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

import './scss/app.scss';

export const SearchContext = React.createContext(null);

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root searchValue={searchValue} setSearchValue={setSearchValue} />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

const Root = ({ searchValue, setSearchValue }) => {
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
