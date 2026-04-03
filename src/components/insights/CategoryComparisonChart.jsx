import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { category: "Food", amount: 5200 },
  { category: "Shopping", amount: 4800 },
  { category: "Bills", amount: 3000 },
  { category: "Travel", amount: 2000 },
];

const CategoryComparisonChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 h-96">
      <h3 className="text-lg font-semibold mb-4">
        Category Comparison
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryComparisonChart;