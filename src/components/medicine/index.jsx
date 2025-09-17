import MedicineTable from "./medicineTable";
import { Button, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
const { Search } = Input;

const Medicine = () => {
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
          Medicine List
          <Button type="primary" size="middle">
            <PlusCircleOutlined /> Add medicine
          </Button>
        </div>
        <Search
          className="mt-7 mx-5 w-1/2"
          placeholder="Search with QR code, name, generic"
          onSearch={onSearch}
          enterButton
        />
        <MedicineTable />
      </div>
    </div>
  );
};

export default Medicine;
