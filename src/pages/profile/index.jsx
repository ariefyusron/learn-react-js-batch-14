import { useNavigate } from 'react-router'

import Header from '../../components/header'

const Profile = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div>
        <h1>Profile</h1>
      </div>

      <br />
      <button onClick={() => {
        navigate(-1)
      }}>
        back
      </button>
    </>
  )
};

export default Profile;