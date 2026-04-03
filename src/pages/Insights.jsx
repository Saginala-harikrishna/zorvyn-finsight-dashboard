import { useSelector } from "react-redux";
import {
  getHighestSpendingCategory,
  getTotalExpenses,
} from "../utils/insights";
import InsightMetricCard from "../components/insights/InsightMetricCard";
import CategoryComparisonChart from "../components/insights/CategoryComparisonChart";

const Insights = () => {
  const transactions = useSelector(
    (state) => state.transactions.transactions
  );

  const highestSpend =
    getHighestSpendingCategory(transactions);

  const totalExpenses =
    getTotalExpenses(transactions);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Financial Insights
      </h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InsightMetricCard
          title="Highest Spending"
          value={`${highestSpend.category} - ₹${highestSpend.amount}`}
          description="Top expense category this month"
        />

        <InsightMetricCard
          title="Monthly Expenses"
          value={`₹${totalExpenses}`}
          description="Total spent this month"
        />

        <InsightMetricCard
          title="Savings Suggestion"
          value="Save ₹1,000"
          description="Reduce dining by 10%"
        />
      </div>

      {/* Chart */}
      <CategoryComparisonChart />

      {/* Smart insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InsightMetricCard
          title="Alert"
          value="Shopping +15%"
          description="Higher than last month"
        />

        <InsightMetricCard
          title="Recommendation"
          value="Budget Alert"
          description="Consider limiting food spend"
        />
      </div>
    </div>
  );
};

export default Insights;