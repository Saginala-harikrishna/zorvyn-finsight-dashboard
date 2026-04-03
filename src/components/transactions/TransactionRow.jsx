const TransactionRow = ({ transaction, role }) => {
  return (
    <tr className="border-b">
      <td className="py-3">{transaction.date}</td>
      <td>{transaction.merchant}</td>
      <td>{transaction.category}</td>
      <td>{transaction.type}</td>
      <td>₹ {transaction.amount}</td>

      <td>
        {role === "admin" ? (
          <div className="flex gap-2">
            <button className="text-blue-500">
              Edit
            </button>

            <button className="text-red-500">
              Delete
            </button>
          </div>
        ) : (
          <span className="text-slate-400">
            View Only
          </span>
        )}
      </td>
    </tr>
  );
};

export default TransactionRow;