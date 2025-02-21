import { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd'
import axios from 'axios'

import storeAuth from '../../stores/storeAuth'

const host = 'https://backend-portal-depok-production.up.railway.app'

const Login = () => {
  const setToken = storeAuth((state) => state.setToken)

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true)

      const response = await axios.post(`${host}/api/auth/login`, e)
      setToken(response.data.token)
    } catch (error) {
      alert(error.response.data.error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Row justify="center" style={{ paddingTop: 100 }}>
      <Col span={12}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          autoComplete="off"
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" loading={isLoading} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
};

export default Login;