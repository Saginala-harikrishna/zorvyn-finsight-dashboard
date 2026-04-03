import { createSlice } from "@reduxjs/toolkit";
import mockTransactions from "../../data/mockTransactions";

const savedTransactions =
  JSON.parse(localStorage.getItem("transactions")) ||
  mockTransactions;

const initialState = {
  transactions: savedTransactions,
  filteredTransactions: savedTransactions,
  searchTerm: "",
  categoryFilter: "All",
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      applyFilters(state);
    },

    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
      applyFilters(state);
    },
  },
});

function applyFilters(state) {
  let filtered = state.transactions;

  if (state.searchTerm) {
    filtered = filtered.filter((txn) =>
      txn.merchant
        .toLowerCase()
        .includes(state.searchTerm.toLowerCase())
    );
  }

  if (state.categoryFilter !== "All") {
    filtered = filtered.filter(
      (txn) => txn.category === state.categoryFilter
    );
  }

  state.filteredTransactions = filtered;
}

export const { setSearchTerm, setCategoryFilter } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;