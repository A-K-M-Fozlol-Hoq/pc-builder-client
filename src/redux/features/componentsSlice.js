import { createSlice } from "@reduxjs/toolkit";

const componentsSlice = createSlice({
  name: "components",
  initialState: {
    // "CPU / Processor": {},
    // Motherboard: {},
    // RAM: {},
    // "Power Supply Unit": {},
    // "Storage Device": {},
    // Monitor: {},
  },
  reducers: {
    addComponent: (state, action) => {
      const { category, component } = action.payload;
      state[category] = component;
    },
    removeComponent: (state, action) => {
      const category = action.payload;
      delete state[category];

      // const category = action.payload;
      // state[category] = {};
    },
  },
});

export const { addComponent, removeComponent } = componentsSlice.actions;
export default componentsSlice.reducer;
