import { Table } from 'antd'

import storeProduct from '../../stores/storeProduct'

const Cashier = () => {
  const products = storeProduct((state) => state.products)

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

  return (
    <>
      <Table columns={columns} dataSource={products} rowKey="id" />
    </>
  )
};

export default Cashier;