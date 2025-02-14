import { useNavigate } from 'react-router'

const Profile = () => {
  const navigate = useNavigate()

  return (
    <>
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