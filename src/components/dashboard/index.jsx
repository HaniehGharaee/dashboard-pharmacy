import CardsDashboatds from "./card";
import SalesProcess from "./chart";
import NumberOfCustomers from "./customerChart"

const Dashboard = () => {
  return (
    <>
      <div className="h-full min-h-screen">
        <CardsDashboatds />
        <SalesProcess />
        <NumberOfCustomers />
      </div>
    </>
  );
};

export default Dashboard;
