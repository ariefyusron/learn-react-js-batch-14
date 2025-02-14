import { useNavigate, useParams } from 'react-router'

const Profile = () => {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <>
      <div>
        <h1>Profile</h1>
        <p>{params.name}</p>
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