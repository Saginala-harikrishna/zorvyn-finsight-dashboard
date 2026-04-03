import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", balance: 40000 },
  { month: "Feb", balance: 45000 },
  { month: "Mar", balance: 48000 },
  { month: "Apr", balance: 52000 },
];

const BalanceTrendChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 h-80">
      <h3 className="text-lg font-semibold mb-4">
        Balance Trend
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#0f172a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceTrendChart;