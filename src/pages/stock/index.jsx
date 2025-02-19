import { useState } from 'react'
import { Table, Button } from 'antd'

import FormComponent from './components/form'
import storeProduct from '../../stores/storeProduct'

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

  const products = storeProduct((state) => state.products)
  const addProduct = storeProduct((state) => state.addProduct)

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

      <Table columns={columns} dataSource={products} rowKey="id" />

      <FormComponent
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        onSubmit={(e) => {
          addProduct(e)
        }}
      />
    </>
  )
};

export default Stock;