const InsightsCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-500 mt-2">
        {description}
      </p>
    </div>
  );
};

export default InsightsCard;