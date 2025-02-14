import { NavLink, Link, useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Home</h1>
      </div>

      <NavLink to="password">Go to password</NavLink>
      <br />
      <Link to="/password">Go to password Link</Link>

      <button onClick={() => {
        navigate('password')
      }}>
        link to password
      </button>
    </>
  )
};

export default Home;