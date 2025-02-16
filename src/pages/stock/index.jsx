import { useState } from 'react'
import { Table, Button } from 'antd'

import FormComponent from './components/form'

const Stock = () => {
  const columns = [
    {
      title: 'Nama Produk',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Harga',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Stok',
      dataIndex: 'stock',
      key: 'stock'
    }
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([])

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        type="primary"
        style={{ marginBottom: '8px' }}
        onClick={() => setIsOpen(true)}
      >
        Tambah Produk
      </Button>

      <Table columns={columns} dataSource={data} rowKey="id" />

      <FormComponent
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        onSubmit={(e) => {
          setData([e, ...data])
        }}
      />
    </>
  )
};

export default Stock;