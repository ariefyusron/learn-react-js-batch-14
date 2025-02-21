import { Button, Result } from 'antd';
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Result
      title="404 Not Found"
      extra={
        <Button type="primary" key="console" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      }
    />
  )
};

export default NotFound;