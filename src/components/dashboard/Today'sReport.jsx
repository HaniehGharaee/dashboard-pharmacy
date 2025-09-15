import React from "react";
import { Table } from "antd";
import "./style.css";

const columns = [
  {
    title: "#",
    dataIndex: "#",
    //render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "Date",
    align: "center",
  },
  {
    title: "Invoice",
    dataIndex: "Invoice",
    align: "center",
  },
  {
    title: "Customer",
    dataIndex: "Customer",
    align: "center",
  },
  {
    title: "Store",
    dataIndex: "Store",
    align: "center",
  },
  {
    title: "Price",
    dataIndex: "Price",
    align: "center",
  },
  {
    title: "Qty",
    dataIndex: "Qty",
    align: "center",
  },
];

const ReportTable = () => (
  <Table
    className="custom-table mt-3 mr-5 py-5 px-5"
    bordered
    columns={columns}
    //dataSource={}
    pagination={false}
    //dataSource={categories?.data?.data?.docs}
    //loading={isGettingProductsCategories}
    scroll={{ x: 300 }}
  />
);
export default ReportTable;
