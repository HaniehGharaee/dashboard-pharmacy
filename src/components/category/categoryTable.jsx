import { Table, Tooltip } from "antd";
import "../../components/dashboard/style.css";
import { EditOutlined } from "@ant-design/icons";
import { DeleteOutline } from "@mui/icons-material";

const CategoryTable = () => {
  const columns = [
    {
      title: "SN",
      dataIndex: "SN",
      render: (_text, _record, index) => {
        return (index + 1);
      },
    },
    {
      title: "Category Name",
      dataIndex: "categoryeName",
      align: "center",
    },
    {
      title: "Generic Name",
      dataIndex: "genericName",
      align: "center",
    },
    {
      title: "Type",
      dataIndex: "type",
      align: "center",
    },
    // {
    //   title: "Images",
    //   dataIndex: "Images",
    //   align: "center",
    // },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
    },
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

  return (
    <Table
      className="custom-table mt-3 mr-5 py-5 px-5"
      borderedF
      columns={columns}
      //dataSource={dataSource}
      pagination={false}
      //dataSource={categories?.data?.data?.docs}
      //loading={isGettingProductsCategories}
      scroll={{ x: 300 }}
    />
  );
};
export default CategoryTable;
