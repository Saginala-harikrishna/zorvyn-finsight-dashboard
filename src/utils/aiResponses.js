export const generateAIResponse = (
  query,
  transactions
) => {
  const lowerQuery = query.toLowerCase();

  const totalExpenses = transactions
    .filter((txn) => txn.type === "expense")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const foodExpenses = transactions
    .filter((txn) => txn.category === "Food")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const shoppingExpenses = transactions
    .filter((txn) => txn.category === "Shopping")
    .reduce((sum, txn) => sum + txn.amount, 0);

  if (
    lowerQuery.includes("food") ||
    lowerQuery.includes("food expenses")
  ) {
    return `You spent ₹${foodExpenses} on Food this month.`;
  }

  if (
    lowerQuery.includes("shopping") ||
    lowerQuery.includes("clothes")
  ) {
    return `You spent ₹${shoppingExpenses} on Shopping this month.`;
  }

  if (
    lowerQuery.includes("highest") ||
    lowerQuery.includes("most")
  ) {
    return "Food is your highest spending category this month.";
  }

  if (
    lowerQuery.includes("suggestion") ||
    lowerQuery.includes("save")
  ) {
    return "You can save ₹1,000 by reducing dining expenses by 10%.";
  }

  if (
    lowerQuery.includes("expenses") ||
    lowerQuery.includes("total")
  ) {
    return `Your total expenses this month are ₹${totalExpenses}.`;
  }

  return "I can help analyze your expenses, categories, and savings suggestions.";
};