import { Button, Modal, Form, Input, InputNumber } from 'antd'
import { v4 as uuidV4 } from 'uuid'

const ComponentForm = ({ isOpen, handleCloseModal, onSubmit }) => {
  const [form] = Form.useForm()

  return (
    <Modal
      open={isOpen}
      onCancel={handleCloseModal}
      footer={null}
    >
      <Form
        form={form}
        onFinish={(e) => {
          onSubmit({
            id: uuidV4(),
            ...e
          })
          handleCloseModal()
          form.resetFields()
        }}
      >
        <Form.Item
          label="Nama Produk"
          name="name"
          rules={[
            {
              required: true,
              message: 'Nama produk harus diisi'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Harga"
          name="price"
          rules={[
            {
              required: true,
              message: 'Harga harus diisi'
            }
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Stok"
          name="stock"
          rules={[
            {
              required: true,
              message: 'Stok harus diisi'
            }
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType='submit'>Simpan</Button>
        </Form.Item>
      </Form>
    </Modal>
  )
};

export default ComponentForm;