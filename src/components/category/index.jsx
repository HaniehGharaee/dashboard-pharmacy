import { Button, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { medicineAddPath } from "@/constants/routePaths/RoutePaths";
import CategoryTable from "./categoryTable";
import { useNavigate } from "react-router-dom";
const { Search } = Input;

const Category = () => {
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
            //onClick={() => navigate()}
          >
            <PlusCircleOutlined className="mt-1" /> Add New
          </Button>
        </div>
        <Search
          className="mt-7 mx-5 w-1/2"
          placeholder="Search with QR code, name, generic"
          //onSearch={onSearch}
          enterButton
        />
        <CategoryTable />
      </div>
    </div>
  );
};

export default Category;
