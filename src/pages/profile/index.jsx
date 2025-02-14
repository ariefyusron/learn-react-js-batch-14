import { useNavigate, useParams, useLocation } from 'react-router'

const Profile = () => {
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()

  console.log(location)

  const searchParams = new URLSearchParams(location.search)

  console.log(searchParams.get('name'))

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