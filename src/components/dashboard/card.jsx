import { Card, Col, Row } from "antd";
import { TableOutlined } from "@ant-design/icons";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StoreIcon from "@mui/icons-material/Store";
import MedicationIcon from '@mui/icons-material/Medication';
import GroupsIcon from '@mui/icons-material/Groups';

const stats = [
  {
    title: "Total Store",
    value: "261",
    icon: <StoreIcon />,
    color: "#4caf50",
  },
  {
    title: "Total Medicines",
    value: "530",
    icon: <MedicationIcon />,
    color: "#0067ff",
  },
  {
    title: "Total Customers",
    value: "530",
    icon: <GroupsIcon />,
    color: "#ffea00",
  },
  {
    title: "Total Suppliers",
    value: "118",
    icon: <GroupsIcon />,
    color: "#e91e63",
  },
  {
    title: "Total Product Sale",
    value: "261",
    icon: <MonetizationOnOutlinedIcon />,
    color: "#2196f3",
  },
  {
    title: "Today Product Sale",
    value: "12",
    icon: <CalendarMonthIcon />,
    color: "#4caf50",
  },
  {
    title: "This Month Sale",
    value: "530",
    icon: <InventoryIcon />,
    color: "#ff9800",
  },
  {
    title: "This Year Product Sale",
    value: "118",
    icon: <PeopleAltIcon />,
    color: "#e91e63",
  },
  {
    title: "Total Product Purchase",
    value: "261",
    icon: <MonetizationOnOutlinedIcon />,
    color: "#2196f3",
  },
  {
    title: "Today Product Purchase",
    value: "12",
    icon: <CalendarMonthIcon />,
    color: "#4caf50",
  },
  {
    title: "This Month Purchase",
    value: "530",
    icon: <InventoryIcon />,
    color: "#ff9800",
  },
  {
    title: "This Year Product Purchase",
    value: "118",
    icon: <PeopleAltIcon />,
    color: "#e91e63",
  },
  {
    title: "Total Earning",
    value: "261",
    icon: <MonetizationOnOutlinedIcon />,
    color: "#2196f3",
  },
  {
    title: "Today Earning",
    value: "12",
    icon: <CalendarMonthIcon />,
    color: "#4caf50",
  },
  {
    title: "This Month Earning",
    value: "530",
    icon: <InventoryIcon />,
    color: "#ff9800",
  },
  {
    title: "This Year Erning",
    value: "118",
    icon: <PeopleAltIcon />,
    color: "#e91e63",
  },
  {
    title: "Total Categories",
    value: "118",
    icon: <PeopleAltIcon />,
    color: "#e91e63",
  },
  {
    title: "Total Transactions",
    value: "118",
    icon: <PeopleAltIcon />,
    color: "#e91e63",
  },
];

const CardsDashboard = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4">
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
                  marginRight: 12,
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
