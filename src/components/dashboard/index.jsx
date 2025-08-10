import CardsDashboatds from "./card";
import SalesProcess from "./chart";
import NumberOfCustomers from "./customerChart";

const Dashboard = () => {
  const sidebarWidth = 100;
  const headerLeftMargin = 40;
  const headerHeight = 30;

  return (
    <div
      style={{
        paddingLeft: sidebarWidth + headerLeftMargin, 
        paddingTop: headerHeight,
        paddingRight: 40,
        minHeight: "100vh",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 ">
        <CardsDashboatds />
        <div className="w-full bg-white grid grid-cols-1 xs:grid-cols-2 col-span-12 rounded-lg mt-4">
          <h3 className="text-gray-950">charts</h3>
          <div className="rounded-lg p-5">
            <SalesProcess />
          </div>
          <NumberOfCustomers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
