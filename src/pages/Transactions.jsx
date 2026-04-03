import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  setCategoryFilter,
} from "../features/transactions/transactionsSlice";
import TransactionRow from "../components/transactions/TransactionRow";

const Transactions = () => {
  const dispatch = useDispatch();

  const { filteredTransactions } = useSelector(
    (state) => state.transactions
  );

  const role = useSelector(
    (state) => state.role.currentRole
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Transactions
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search merchant..."
          className="p-3 rounded-xl border w-full"
          onChange={(e) =>
            dispatch(setSearchTerm(e.target.value))
          }
        />

        <select
          className="p-3 rounded-xl border"
          onChange={(e) =>
            dispatch(setCategoryFilter(e.target.value))
          }
        >
          <option>All</option>
          <option>Food</option>
          <option>Shopping</option>
          <option>Income</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md p-5 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Date</th>
              <th>Merchant</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
  {filteredTransactions.length > 0 ? (
    filteredTransactions.map((txn) => (
      <TransactionRow
        key={txn.id}
        transaction={txn}
        role={role}
      />
    ))
  ) : (
    <tr>
      <td colSpan="6" className="text-center py-6">
        No transactions found
      </td>
    </tr>
  )}
</tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;