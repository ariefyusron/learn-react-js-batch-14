import { Navigate } from 'react-router'

import storeAuth from '../../stores/storeAuth';

const ProtectElement = ({ children, auth }) => {
  const token = storeAuth((state) => state.token)

  const renderElement = () => {
    if(auth) {
      if(token){
        return children
      } else {
        return <Navigate to='/' />
      }
    } else {
      if(token){ 
        return <Navigate to='/' />
      } else {
        return children
      }
    }
  }

  return renderElement()
};

export default ProtectElement;