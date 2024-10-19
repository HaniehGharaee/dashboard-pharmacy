import * as React from "react";
import { Card, Col, Row } from "antd";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import ReportTable from "./Today'sReport";

export default function BasicPie() {
  return (
    <Row className="grid grid-cols-2 gap-0">
      <div className="mt-10 bg-slate-600 w-auto mr-3 h-80 pt-20 rounded">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10 },
                { id: 1, value: 15 },
                { id: 2, value: 20 },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
      <div className="mt-10 bg-slate-600 w-auto mr-3 rounded">
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["group A", "group B", "group C"] },
          ]}
          series={[
            { data: [4, 3, 5] },
            { data: [1, 6, 3] },
            { data: [2, 5, 6] },
          ]}
          width={400}
          height={300}
        />
      </div>
      <div className="mt-10 bg-slate-600 w-auto mr-3 h-80 pt-20 rounded">
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              valueFormatter: (value) =>
                value == null ? "NaN" : value.toString(),
            },
            {
              data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
            },
            {
              data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
              valueFormatter: (value) =>
                value == null ? "?" : value.toString(),
            },
          ]}
          height={200}
          margin={{ top: 10, bottom: 20 }}
        />
      </div>
      <div className="w-auto mr-3 rounded">
        <ReportTable />
      </div>
    </Row>
  );
}
