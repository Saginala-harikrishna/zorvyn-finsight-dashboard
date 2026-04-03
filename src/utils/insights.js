export const getHighestSpendingCategory = (transactions) => {
  const expenses = transactions.filter(
    (txn) => txn.type === "expense"
  );

  const categoryTotals = {};

  expenses.forEach((txn) => {
    categoryTotals[txn.category] =
      (categoryTotals[txn.category] || 0) +
      txn.amount;
  });

  let highestCategory = "";
  let highestAmount = 0;

  for (const category in categoryTotals) {
    if (categoryTotals[category] > highestAmount) {
      highestAmount = categoryTotals[category];
      highestCategory = category;
    }
  }

  return {
    category: highestCategory,
    amount: highestAmount,
  };
};

export const getTotalExpenses = (transactions) => {
  return transactions
    .filter((txn) => txn.type === "expense")
    .reduce((sum, txn) => sum + txn.amount, 0);
};