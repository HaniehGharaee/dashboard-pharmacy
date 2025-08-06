import CardsDashboatds from "./card";
import SalesProcess from "./chart";

const Dashboard = () => {
  return (
    <>
      <div className="h-full min-h-screen">
        <CardsDashboatds />
        <SalesProcess />
      </div>
    </>
  );
};

export default Dashboard;
