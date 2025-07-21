import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (state, action) => {
      // Accepts either an array or an object with a data property (array)
      if (Array.isArray(action.payload)) {
        return action.payload;
      }
      if (action.payload && Array.isArray(action.payload.data)) {
        return action.payload.data;
      }
      return [];
    },
    removeUserFromFeed: (state, action) => {
      const newFeed = state.filter((user) => user._id !== action.payload);
      return newFeed;
    },
    removeFeed: () => {
      return null;
    },
  },
});

export const { addFeed, removeUserFromFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
