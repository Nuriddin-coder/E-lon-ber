import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../lib/local-storage";

const initialState = loadState("user") || {
  age: null,
  id: undefined,
  location: null,
  email: null,
  name: null,
  isAuthification: false,
};


export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeEffect: (state) => {
      return { ...state, isAuthification: true };
    },
  },
});

export const UserReducer = users.reducer;

export const { changeEffect } = users.actions;
