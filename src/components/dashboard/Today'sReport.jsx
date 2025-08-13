import React from "react";
import { Table } from "antd";
import './style.css';

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Cash Assets",
    className: "column-money",
    dataIndex: "money",
    align: "right",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    //address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    //address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    //address: "Sydney No. 1 Lake Park",
  },
];
const ReportTable = () => (
  <Table
    className="custom-table mt-10 mr-5 py-5 px-5"
    bordered
    columns={columns}
    dataSource={data}
    pagination={false}
    //dataSource={categories?.data?.data?.docs}
    //loading={isGettingProductsCategories}
    //columns={columns}
    scroll={{ x: 300 }}
  />
);
export default ReportTable;
