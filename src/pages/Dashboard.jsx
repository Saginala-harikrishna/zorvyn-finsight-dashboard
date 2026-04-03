import SummaryCard from "../components/dashboard/SummaryCard";
import BalanceTrendChart from "../components/dashboard/BalanceTrendChart";
import SpendingDonutChart from "../components/dashboard/SpendingDonutChart";
import InsightsCard from "../components/dashboard/InsightsCard";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <SummaryCard
          title="Total Balance"
          amount={84500}
          change="+12% this month"
          color="text-green-500"
        />

        <SummaryCard
          title="Income"
          amount={50000}
          change="+8% this month"
          color="text-green-500"
        />

        <SummaryCard
          title="Expenses"
          amount={15500}
          change="-5% this month"
          color="text-red-500"
        />

        <SummaryCard
          title="Savings"
          amount={69000}
          change="+18% this month"
          color="text-green-500"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <BalanceTrendChart />
        <SpendingDonutChart />
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InsightsCard
          title="Highest Spend"
          description="Food category consumed ₹5,200 this month."
        />

        <InsightsCard
          title="Alert"
          description="Shopping expenses increased by 15%."
        />

        <InsightsCard
          title="Suggestion"
          description="Reduce dining by 10% to save ₹1,000."
        />
      </div>
    </div>
  );
};

export default Dashboard;