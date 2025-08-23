import React, { useState, useEffect } from 'react';
import CardsDashboatds from "./card";
import SalesProcess from "./chart";
import NumberOfCustomers from "./customerChart";
import ProductSale from "./ProductSale";
import Earning from "./Earning";
import ReportTable from "./Today'sReport";
import { TableOutlined } from "@ant-design/icons";
import apiCall from '@/services/apiCall';
import endpoints from '@/services/endpoints';

const Dashboard = () => {
  const sidebarWidth = 100;
  const headerLeftMargin = 40;
  const headerHeight = 30;

  const [data, setData] = useState({})

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await apiCall.get(endpoints.getSummery);
    if (result.isSuccess) {
      setData(result?.data?.data);
    }
  };

  return (
    <div className="pt-[30px] pr-10 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 ">
        <CardsDashboatds data={data} />
        <div className="w-full bg-white rounded-lg mt-7">
          <div className="p-5 bg-blue-500 w-full h-10 flex items-center rounded-t-lg">
            <h3 className="text-gray-50">Charts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            <SalesProcess />
            <NumberOfCustomers />
            <ProductSale />
            <Earning />
          </div>
        </div>
        <div className="w-full bg-white rounded-lg mt-7">
          <div className="p-5 w-full h-10 flex items-center rounded-t-lg">
            <div className="text-slate-700 text-2xl mt-5">
              <TableOutlined className="text-[#4b4b4d] pr-2 pt-2" />
              Latest Orders
            </div>
          </div>
          <ReportTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
