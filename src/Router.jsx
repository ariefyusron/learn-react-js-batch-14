import { BrowserRouter, Routes, Route } from 'react-router'

import HomePage from './pages/home'
import ProfilePage from './pages/profile'

import Header from './components/header'

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/" element={<HomePage />} />
        <Route path='profile' element={<ProfilePage />} /> */}

        <Route path='setting' element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path='password/:name' element={<ProfilePage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
};

export default Router;