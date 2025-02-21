import { useEffect, useState } from 'react';
import axios from 'axios'
import { Spin } from 'antd'

import storeAuth from '../../stores/storeAuth'

const host = 'https://backend-portal-depok-production.up.railway.app'

const News = () => {
  const token = storeAuth((state) => state.token)
  const [isLoading, setIsLoading] = useState(false)
  const [list, setList] = useState([])

  const getData = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(`${host}/api/politik`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log(response.data)
      setList(response.data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div>
      {isLoading ? (<Spin size='large' />) : (
        <>
          {list.map(item => (
            <div key={item._id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))}
        </>
      )}
    </div>
  )
};

export default News;