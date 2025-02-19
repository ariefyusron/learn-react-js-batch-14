import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router'

const StockPage = lazy(() => import('./pages/stock'))
const CashierPage = lazy(() => import('./pages/cashier'))

import ContainerPage from './components/container-page';

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ContainerPage />}>
          <Route path="/stock" element={<StockPage />} />
          <Route path="/cashier" element={<CashierPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;