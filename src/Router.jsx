import { BrowserRouter, Routes, Route } from 'react-router'

import StockPage from './pages/stock';
import CashierPage from './pages/cashier'

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