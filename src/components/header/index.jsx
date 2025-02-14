import { Outlet } from 'react-router'

const Header = () => {

  return (
    <>
      <div>
        <h1>Header</h1>
      </div>
      <Outlet />
      <div>
        <h1>Footer</h1>
      </div>
    </>
  )
};

export default Header;