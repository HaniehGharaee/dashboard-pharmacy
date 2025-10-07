import { Button, Input, Form, Row, Col, Select } from "antd";

const AddCategoryForm = ({ onAdd }) => {
  const [form] = Form.useForm();
  console.log("formformform", form);

  const handleAdd = (value) => {
    console.log("valuevaluevaluevalue", value);
    onAdd(value); // send data to parent
    form.resetFields();
  };

  return (
    <Form onFinish={handleAdd} form={form} layout="vertical" className="pt-4">
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item label="Categorye Name" name="categoryeName" required>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item label="Type" name="type" required>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item label="Code" name="code" required>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item label="Status" name="status" required>
            <Select
              //defaultValue="active"
              //style={{ width: 120 }}
              //onChange={handleChange}
              options={[
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="end">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Button type="primary" htmlType="submit" className="w-full">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddCategoryForm;
