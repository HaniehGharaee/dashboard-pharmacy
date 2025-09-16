import { Table, Tooltip } from "antd";
import "../../components/dashboard/style.css";
import { EditOutlined } from "@ant-design/icons";
import { DeleteOutline } from "@mui/icons-material";

const MedicineTable = () => {
  const columns = [
    {
      title: "SN",
      dataIndex: "SN",
      render: (_text, _record, index) => {
        return (index + 1);
      },
    },
    {
      title: "Medicine Name",
      dataIndex: "medicineName",
      align: "center",
    },
    {
      title: "Generic Name",
      dataIndex: "genericName",
      align: "center",
    },
    {
      title: "Category",
      dataIndex: "category",
      align: "center",
    },
    {
      title: "Supplier",
      dataIndex: "supplier",
      align: "center",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      align: "center",
    },
    {
      title: "Leaf",
      dataIndex: "leaf",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center",
    },
    {
      title: "SupplierPrice",
      dataIndex: "supplierPrice",
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
      key: "Action",
      render: (text, record) => {
        return (
          <div className="flex w-25 gap-x-1">
            <Tooltip title="edit" color="#0000ff">
              <div className="text-blue-500">
                <EditOutlined />
              </div>
            </Tooltip>
            <Tooltip title="delete" color="#ff0000">
              <div className="text-red-500">
                <DeleteOutline />
              </div>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      medicineName: 'staminophen',
      genericName: '666666',
      category: 'drug',
      supplier : 'kimiaDaroo',
      unit: '1',
      leaf: '11',
      price: '120000',
      supplierPrice: '120000',
      Images: 'Images',
    },
  ];
  return (
    <Table
      className="custom-table mt-3 mr-5 py-5 px-5"
      borderedF
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      //dataSource={categories?.data?.data?.docs}
      //loading={isGettingProductsCategories}
      scroll={{ x: 300 }}
    />
  );
};
export default MedicineTable;
