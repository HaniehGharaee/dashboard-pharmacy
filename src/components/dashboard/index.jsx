import CardsDashboatds from "./card";
import SalesProcess from "./chart";
import NumberOfCustomers from "./customerChart";
import ProductSale from "./ProductSale";
import Earning from "./Earning";
import ReportTable from "./Today'sReport"

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
        <div className="w-full bg-white rounded-lg mt-7">
          <div className="p-5 bg-blue-500 w-full h-10 flex items-center rounded-t-lg">
            <h3 className="text-gray-50">Charts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            <SalesProcess />
            <NumberOfCustomers />
            <ProductSale />
            <Earning />
          </div>
        </div>
        <div className= "w-full bg-white rounded-lg mb-7">
          <ReportTable/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
