const InsightMetricCard = ({ title, value, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h3 className="text-sm text-slate-500">
        {title}
      </h3>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>

      <p className="text-sm text-slate-400 mt-2">
        {description}
      </p>
    </div>
  );
};

export default InsightMetricCard;