import { createSlice } from "@reduxjs/toolkit";
import mockTransactions from "../../data/mockTransactions";

const initialState = {
  transactions: mockTransactions,
  filteredTransactions: mockTransactions,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
});

export default transactionsSlice.reducer;