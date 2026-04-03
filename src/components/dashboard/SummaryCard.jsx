const SummaryCard = ({ title, amount, change, color }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h3 className="text-sm text-slate-500">{title}</h3>

      <p className="text-2xl font-bold mt-2">
        ₹ {amount.toLocaleString()}
      </p>

      <span className={`text-sm mt-2 inline-block ${color}`}>
        {change}
      </span>
    </div>
  );
};

export default SummaryCard;