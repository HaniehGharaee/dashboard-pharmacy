import { Card, Col, Row } from "antd";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StoreIcon from "@mui/icons-material/Store";
import MedicationIcon from "@mui/icons-material/Medication";
import GroupsIcon from "@mui/icons-material/Groups";

const CardsDashboard = ({ data }) => {
  const stats = [
    {
      title: "Total Store",
      value: data?.totalStores ?? 0,
      icon: <StoreIcon />,
      color: "#4caf50",
    },
    {
      title: "Total Medicines",
      value: data?.totalMedicines ?? 0,
      icon: <MedicationIcon />,
      color: "#0067ff",
    },
    {
      title: "Total Customers",
      value: data?.totalCustomers ?? 0,
      icon: <GroupsIcon />,
      color: "#ffea00",
    },
    {
      title: "Total Suppliers",
      value: data?.totalSuppliers ?? 0,
      icon: <GroupsIcon />,
      color: "#e91e63",
    },
    {
      title: "Total Product Sale",
      value: data?.totalProductSale ?? 0,
      icon: <MonetizationOnOutlinedIcon />,
      color: "#2196f3",
    },
    {
      title: "Today Product Sale",
      value: data?.todayProductSale ?? 0,
      icon: <CalendarMonthIcon />,
      color: "#4caf50",
    },
    {
      title: "This Month Sale",
      value: data?.thisMonthSale ?? 0,
      icon: <InventoryIcon />,
      color: "#ff9800",
    },
    {
      title: "This Year Product Sale",
      value: data?.thisYearProductSale ?? 0,
      icon: <PeopleAltIcon />,
      color: "#e91e63",
    },
    {
      title: "Total Product Purchase",
      value: data?.totalProductPurchase ?? 0,
      icon: <MonetizationOnOutlinedIcon />,
      color: "#2196f3",
    },
    {
      title: "Today Product Purchase",
      value: data?.todayProductPurchase ?? 0,
      icon: <CalendarMonthIcon />,
      color: "#4caf50",
    },
    {
      title: "This Month Purchase",
      value: data?.thisMonthPurchase ?? 0,
      icon: <InventoryIcon />,
      color: "#ff9800",
    },
    {
      title: "This Year Product Purchase",
      value: data?.thisYearProductPurchase ?? 0,
      icon: <PeopleAltIcon />,
      color: "#e91e63",
    },
    {
      title: "Total Earning",
      value: data?.totalEarning ?? 0,
      icon: <MonetizationOnOutlinedIcon />,
      color: "#2196f3",
    },
    {
      title: "Today Earning",
      value: data?.todayEarning ?? 0,
      icon: <CalendarMonthIcon />,
      color: "#4caf50",
    },
    {
      title: "This Month Earning",
      value: data?.thisMonthEarning ?? 0,
      icon: <InventoryIcon />,
      color: "#ff9800",
    },
    {
      title: "This Year Erning",
      value: data?.thisYearEarning ?? 0,
      icon: <PeopleAltIcon />,
      color: "#e91e63",
    },
    {
      title: "Total Categories",
      value: data?.totalCategories ?? 0,
      icon: <PeopleAltIcon />,
      color: "#e91e63",
    },
    {
      title: "Total Transactions",
      value: data?.totalTransactions ?? 0,
      icon: <PeopleAltIcon />,
      color: "#e91e63",
    },
  ];
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
