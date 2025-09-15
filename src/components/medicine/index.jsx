import MedicineTable from "./medicineTable";
const Medicine = () => {
  return (
    <div className="min-h-screen">
      <div
        className="bg-white rounded-lg mt-7"
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <div className="text-slate-700 text-2xl pt-3">Medicine List</div>
        <MedicineTable />
      </div>
    </div>
  );
};

export default Medicine;
