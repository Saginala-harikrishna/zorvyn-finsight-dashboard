import { createSlice } from "@reduxjs/toolkit";

const savedTheme =
  JSON.parse(localStorage.getItem("darkMode")) ?? false;

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    darkMode: savedTheme,
    mobileSidebarOpen: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;

      localStorage.setItem(
        "darkMode",
        JSON.stringify(state.darkMode)
      );
    },

    toggleMobileSidebar: (state) => {
      state.mobileSidebarOpen =
        !state.mobileSidebarOpen;
    },

    closeMobileSidebar: (state) => {
      state.mobileSidebarOpen = false;
    },
  },
});

export const {
  toggleDarkMode,
  toggleMobileSidebar,
  closeMobileSidebar,
} = uiSlice.actions;

export default uiSlice.reducer;