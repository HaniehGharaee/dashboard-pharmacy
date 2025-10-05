import { Button, Input, Modal, Form, Row, Col, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { medicineAddPath } from "@/constants/routePaths/RoutePaths";
import CategoryTable from "./categoryTable";
import { useState } from "react";
const { Search } = Input;

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSearch = (value, _e, info) => console.log(info?.source, value);
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
          Category List
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            onClick={() => setIsModalOpen(true)}
          >
            <PlusCircleOutlined className="mt-1" /> Add New
          </Button>
        </div>
        <Modal
          title="Add New Category"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <Form
            //onFinish ={}
            layout="vertical"
            className="pt-4 pb-4"
          >
            <Row gutter={[8, 8]}>
              <Col xs={12}>
                <Form.Item label="Categorye Name" name="categoryeName" required>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item label="Type" name="type" required>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item label="Code" name="code" required>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={12}>
                <Form.Item label="Status" name="status" required>
                  <Select
                    defaultValue="active"
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
          </Form>
        </Modal>
        <Search
          className="mt-7 mx-5 w-1/2"
          placeholder="Search with QR code, name, generic"
          onSearch={onSearch}
          enterButton
        />
        <CategoryTable />
      </div>
    </div>
  );
};

export default Category;
