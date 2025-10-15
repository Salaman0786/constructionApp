import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  valueColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, valueColor }) => {
  return (
    <div className="flex flex-col justify-between border border-gray-200 rounded-lg shadow-sm p-5 min-w-[110px] min-h-[100px]">
      <p className="text-sm text-gray-700 font-medium">{title}</p>
      <p className={`text-lg font-semibold ${valueColor ?? "text-black"}`}>
        {value}
      </p>
    </div>
  );
};

const InventoryDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-900">Inventory Report</h1>
      <p className="text-sm text-gray-500 mb-6">
        Stock levels and valuation summary
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Total Value" value={"$3,587.5"} />
        <StatCard title="Total Items" value={"3"} />
        <StatCard
          title="Low Stock Items"
          value={"2"}
          valueColor="text-orange-400"
        />
        <StatCard title="Out of Stock" value={"0"} valueColor="text-red-500" />
      </div>
    </div>
  );
};

export default InventoryDashboard;
