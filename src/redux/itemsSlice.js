import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

const itemsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        if (!state.find((contact) => contact.name === payload.name)) {
          state.push(payload);
        } else {
          alert(`${payload.name} is already in the list`);
          return state;
        }
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: shortid.generate(),
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      return state.filter((contact) => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = itemsSlice.actions;

export default itemsSlice.reducer;
