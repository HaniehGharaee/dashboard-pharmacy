import { useState } from "react";
import { Button, Input, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import CategoryTable from "./categoryTable";
import AddCategoryForm from "./categoryForm";
const { Search } = Input;

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const handleAddCategory = (value) => {
    // value is object and just Arrays and strings is iterable (...) (like Map, Set)
    //{
    //   categoryeName: "Antibiotics",
    //   type: "Medicine",
    //   code: "CAT001",
    //   status: "active"
    // }
    setCategoryList((prev) => [...prev, value]); //setCategoryList([...values]) is not correct
    //The setCategoryList function is used to update the state.
    //We wrote it as a function because we want to get the previous value of state and add a new value to it.
    //Get the previous value of state (prev),
    setIsModalOpen(false);
  };

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
          <AddCategoryForm onAdd={handleAddCategory} />
        </Modal>
        <Search
          className="mt-7 mx-5 w-1/2"
          placeholder="Search with QR code, name, generic"
          onSearch={onSearch}
          enterButton
        />
        <CategoryTable categories={categoryList} />
      </div>
    </div>
  );
};

export default Category;

//Category (parent)
// ├── AddCategoryForm (child)
// └── CategoryTable (other child)

//Data flow: child -> parent : AddCategoryForm -> Category
//Function flow: Parent → Child (The parent sends a function to the child to receive data.(onAdd))
