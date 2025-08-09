import { useState } from "react";
import ReactEchartsCustom from "@/components/Chart";
import { BarOptions } from "@/components/Chart/options";

const NumberOfCustomers = () => {
  const [customerData, setCustomerData] = useState([
    {
      name: "April",
      value: "50",
    },
    {
      name: "May",
      value: "35",
    },
    {
      name: "June",
      value: "40",
    },
    {
      name: "July ",
      value: "10",
    },
  ]);

  return (
    <>
      <div>
        <ReactEchartsCustom
          option={BarOptions({
            title: "Number of customers",
            data: customerData || [],
          })}
        />
      </div>
    </>
  );
};
export default NumberOfCustomers;
