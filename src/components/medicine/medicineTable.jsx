import { Table } from "antd";
import "../../components/dashboard/style.css";

const MedicineTable = () => {
  const columns = [
    {
      title: "SN",
      dataIndex: "SN",
      //render: (text) => <a>{text}</a>,
    },
    {
      title: "Medicine Name",
      dataIndex: "Medicine Name",
      align: "center",
    },
    {
      title: "Generic Name",
      dataIndex: "Generic Name",
      align: "center",
    },
    {
      title: "Category",
      dataIndex: "Category",
      align: "center",
    },
    {
      title: "Supplier",
      dataIndex: "Supplier",
      align: "center",
    },
    {
      title: "Unit",
      dataIndex: "Unit",
      align: "center",
    },
    {
      title: "Leaf",
      dataIndex: "Leaf",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "Price",
      align: "center",
    },
    {
      title: "SupplierPrice",
      dataIndex: "SupplierPrice",
      align: "center",
    },
    {
      title: "Images",
      dataIndex: "Images",
      align: "center",
    },
    // {
    //   title: "shelf",
    //   dataIndex: "shelf",
    //   align: "center",
    // },
    // {
    //   title: "strength",
    //   dataIndex: "strength",
    //   align: "center",
    // },
    {
      title: "Action",
      dataIndex: "Action",
      align: "center",
    },
  ];
  return (
    <Table
      className="custom-table mt-3 mr-5 py-5 px-5"
      borderedF
      columns={columns}
      //dataSource={}
      pagination={false}
      //dataSource={categories?.data?.data?.docs}
      //loading={isGettingProductsCategories}
      scroll={{ x: 300 }}
    />
  );
};
export default MedicineTable;
