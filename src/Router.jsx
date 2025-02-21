import { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'

const NotFoundPage = lazy(() => import('./pages/not-found'))

const LoginPage = lazy(() => import('./pages/login'))

const StockPage = lazy(() => import('./pages/stock'))
const CashierPage = lazy(() => import('./pages/cashier'))
const NewsPage = lazy(() => import('./pages/news'))

import storeAuth from './stores/storeAuth';
import ContainerPage from './components/container-page';
import ProtectElement from './components/protect-element';

const Router = () => {
  const token = storeAuth((state) => state.token)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={token ? <Navigate to='/stock' /> : <Navigate to='/login' />} />

        <Route element={(
          <ProtectElement auth>
            <ContainerPage />
          </ProtectElement>
        )}>
          <Route auth path="/stock" element={<StockPage />} />
          <Route auth path="/cashier" element={<CashierPage />} />
          <Route auth path="/news" element={<NewsPage />} />
        </Route>

        <Route auth={false} path='/login' element={(
          <ProtectElement auth={false}>
            <LoginPage />
          </ProtectElement>
        )} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;