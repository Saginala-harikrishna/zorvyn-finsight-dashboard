import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Food", value: 5200 },
  { name: "Shopping", value: 4800 },
  { name: "Bills", value: 3000 },
  { name: "Travel", value: 2000 },
];

const COLORS = ["#0f172a", "#334155", "#64748b", "#94a3b8"];

const SpendingDonutChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 h-80">
      <h3 className="text-lg font-semibold mb-4">
        Spending Breakdown
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingDonutChart;