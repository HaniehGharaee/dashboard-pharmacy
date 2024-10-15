import CardsDashboatds from "./card";
import PieChart from "./chart";
const Dashboard = () => {
  return (
    <>
      <CardsDashboatds />
      <div className="mt-10">
        <PieChart/>
      </div>
    </>
  );
};

export default Dashboard;
