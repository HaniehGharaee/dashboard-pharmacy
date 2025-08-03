import { Card, Col, Row } from "antd";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const stats = [
  {
    title: " Total Suppliers",
    value: "261",
    icon: <MonetizationOnOutlinedIcon />,
    color: "#2196f3",
  },
  {
    title: "Total Product Sale",
    value: "12",
    icon: <CalendarMonthIcon />,
    color: "#4caf50",
  },
  {
    title: "Total Medicines",
    value: "530",
    icon: <InventoryIcon />,
    color: "#ff9800",
  },
  {
    title: "Total Customers",
    value: "118",
    icon: <PeopleAltIcon />,
    color: "#e91e63",
  },
  {
    title: " Total Suppliers",
    value: "261",
    icon: <MonetizationOnOutlinedIcon />,
    color: "#2196f3",
  },
  {
    title: "Total Product Sale ",
    value: "12",
    icon: <CalendarMonthIcon />,
    color: "#4caf50",
  },
  {
    title: "Total Medicines",
    value: "530",
    icon: <InventoryIcon />,
    color: "#ff9800",
  },
  {
    title: "Total Customers",
    value: "118",
    icon: <PeopleAltIcon />,
    color: "#e91e63",
  },
  {
    title: "Total Suppliers ",
    value: "261",
    icon: <MonetizationOnOutlinedIcon />,
    color: "#2196f3",
  },
  {
    title: "Total Product Sale ",
    value: "12",
    icon: <CalendarMonthIcon />,
    color: "#4caf50",
  },
  {
    title: "Total Medicines",
    value: "530",
    icon: <InventoryIcon />,
    color: "#ff9800",
  },
  {
    title: "Total Customers",
    value: "118",
    icon: <PeopleAltIcon />,
    color: "#e91e63",
  },
  {
    title: " Total Suppliers",
    value: "261",
    icon: <MonetizationOnOutlinedIcon />,
    color: "#2196f3",
  },
  {
    title: "Total Product Sale ",
    value: "12",
    icon: <CalendarMonthIcon />,
    color: "#4caf50",
  },
  {
    title: "Total Suppliers",
    value: "530",
    icon: <InventoryIcon />,
    color: "#ff9800",
  },
  {
    title: "Total Customers",
    value: "118",
    icon: <PeopleAltIcon />,
    color: "#e91e63",
  },
  {
    title: "Total Customers",
    value: "118",
    icon: <PeopleAltIcon />,
    color: "#e91e63",
  },
  {
    title: "Total Customers",
    value: "118",
    icon: <PeopleAltIcon />,
    color: "#e91e63",
  },
];

const CardsDashboard = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-3">
      <Row gutter={[12, 12]}>
        {stats.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              bordered={false}
              bodyStyle={{
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start", //start from left
                height: 80,
                background: "#f9f9f9",
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  backgroundColor: item.color,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  marginRight: 12
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: 14, color: "#666" }}>{item.title}</div>
                <div style={{ fontSize: 20, fontWeight: "bold" }}>
                  {item.value}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardsDashboard;
