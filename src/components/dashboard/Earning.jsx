import { useState } from "react";
import ReactEchartsCustom from "@/components/Chart";
import { LinesChart } from "@/components/Chart/options";

const Earning = () => {
  const [customerData, setCustomerData] = useState([
    { name: "April", value: "50" },
    { name: "May", value: "35" },
    { name: "June", value: "40" },
    { name: "July", value: "10" },
  ]);
  const labels = customerData.map((item) => item.name); // ['April', 'May', 'June', 'July']
  const values = customerData.map((item) => Number(item.value)); // [50, 35, 40, 10]

  return (
    <>
      <div>
        <ReactEchartsCustom
          option={LinesChart({
            title: "Earning",
            xAxisData: labels,
            seriesData: values,
          })}
        />
      </div>
    </>
  );
};
export default Earning;