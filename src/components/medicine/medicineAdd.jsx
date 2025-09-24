import { Button, Input, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const AddMedicines = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="min-h-screen">
      <div
        className="bg-white rounded-lg mt-7"
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <div className="flex items-center justify-between text-slate-700 text-2xl pt-3">
          Add Medicine
          <Button type="primary" size="middle">
            Back
          </Button>
        </div>
        <div className="flex flex-col gap-3 mt-7">
          <Form
            name="basic"
            //labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            // initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Barcode"
              name="Barcode"
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Name"
              name="Name"
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Generic Name"
              name="Generic Name"
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Category"
              name="Category"
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Medicine Type"
              name="Medicine Type"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Unit"
              name="Unit"
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Box Size"
              name="Box Size"
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Medicine Details"
              name="Medicine Details"
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Image"
              name="Image"
            //rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Supplier"
              name="Supplier"
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Supplier Price"
              name="Supplier Price"
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Price"
              name="Price"
              rules={[{ required: true, message: '' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Vat"
              name="Vat"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Status"
              name="Status"
            >
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddMedicines;
