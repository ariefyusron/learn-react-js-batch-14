import { BrowserRouter, Routes, Route } from 'react-router'

import HomePage from './pages/home'
import ProfilePage from './pages/profile'

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/" element={<HomePage />} />
        <Route path='profile' element={<ProfilePage />} /> */}

        <Route path='setting'>
          <Route index element={<HomePage />} />
          <Route path='password' element={<ProfilePage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
};

export default Router;