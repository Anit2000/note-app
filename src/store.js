import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./features/notes";
const store = configureStore({
  reducer: {
    notes: noteSlice.reducer,
  },
});
export default store;
