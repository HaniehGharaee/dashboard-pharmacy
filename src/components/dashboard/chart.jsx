import { useState } from 'react';
import ReactEchartsCustom from '@/components/Chart';
import { BarOptions } from '@/components/Chart/options';

const SalesProcess = () => {
  const [appointemtData, setAppointmentData] = useState([
    {
      name: 'April',
      value: '50',
    },
    {
      name: 'May',
      value: '35',
    },
    {
      name: 'June',
      value: '40',
    },
    {
      name: 'July ',
      value: '10',
    },
  ]);

  return (
    <>
      <div className=" ">
        <ReactEchartsCustom
          option={BarOptions({
            title: 'sale',
            data: appointemtData || [],
          })}
        />
      </div>
    </>
  );
};
export default SalesProcess;
