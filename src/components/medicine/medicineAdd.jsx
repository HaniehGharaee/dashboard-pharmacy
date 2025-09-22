import { Button, Input, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const AddMedicines = () => {
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
        <div className="flex flex-col gap-2 mt-7">
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            //onFinish={onFinish}
            //onFinishFailed={onFinishFailed}
          >
            <Form.Item name="patientName" className="mb-4">
              <Input
                //disabled={disabled}
                label="patientName"
                span="24"
                placeholder="patientName"
                type="text"
                theme="dark"
              />
            </Form.Item>
            <Form.Item name="patientName" className="mb-4">
              <Input
                //disabled={disabled}
                label="patientName"
                span="24"
                placeholder="patientName"
                type="text"
                theme="dark"
              />
            </Form.Item>
            <Form.Item name="patientName" className="mb-4">
              <Input
                //disabled={disabled}
                label="patientName"
                span="24"
                placeholder="patientName"
                type="text"
                theme="dark"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddMedicines;
