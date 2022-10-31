import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = {
  notes: [
    {
      id: uuid(),
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget nisi vestibulum, ornare tellus a, interdum sem. Praesent porttitor lacus ut diam lobortis, at ultrices mi egestas.",
      read: true,
    },
    {
      id: uuid(),
      note: "Vivamus finibus dictum pharetra. Curabitur rutrum est quis interdum auctor. Duis neque nisi, imperdiet ac nisl vitae, auctor maximus ante",
    },
    {
      id: uuid(),
      note: "Nullam pellentesque viverra dolor non sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  ],
  formDisplay: false,
};
const noteSlice = createSlice({
  name: "NOTE",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },
    displayForm: (state) => {
      state.formDisplay = !state.formDisplay;
    },
  },
});
export const { addNote, displayForm } = noteSlice.actions;
export default noteSlice;
