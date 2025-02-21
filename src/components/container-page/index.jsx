import { Suspense } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router'
import { Row, Col, Menu, Spin } from 'antd'

const ContainerPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      key: 'menu',
      label: 'Menu',
      type: 'group',
      children: [
        {
          key: '/stock',
          label: 'Stock',
        },
        {
          key: '/cashier',
          label: 'Kasir'
        },
        {
          key: '/news',
          label: 'Berita'
        }
      ]
    }
  ]

  const getItem = (key) => {
    const listMenu = menuItems[0].children
    const result = listMenu.find(item => item.key === key)

    return result
  }
  const item = getItem(location.pathname)

  return (
    <Row>
      <Col span={4}>
        <Menu
          items={menuItems}
          onClick={(e) => {
            navigate(e.key)
          }}
          defaultSelectedKeys={[location.pathname]}
        />
      </Col>
      <Col style={{ padding: '24px' }} span={20}>
        <h1>{item.label}</h1>
        <Row style={{ marginTop: '16px' }}>
          <Col span={24}>
            <Suspense fallback={<Spin />}>
              <Outlet />
            </Suspense>
          </Col>
        </Row>
      </Col>
    </Row>
  )
};

export default ContainerPage;