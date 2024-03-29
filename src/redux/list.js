import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  field: "",
  items: [],
};

const json = window.localStorage.getItem("payload");
if (json !== null && json !== "") {
  const payload = JSON.parse(json);
  initialState.field = payload.listReducer.field;
  initialState.items = payload.listReducer.items;
}
export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    define: (state, action) => {
      state.field = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.field = "";
    },
    removeItem: (state, action) => {
      const newItems = state.items.filter(
        (item, index) => index !== action.payload
      );
      state.items = newItems;
    },
  },
});

export const { define, addItem, removeItem } = listSlice.actions;

export default listSlice.reducer;
