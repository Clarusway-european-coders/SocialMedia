import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  // if the name the key values are the same you can just write one of them.
  // setUser the key value and the object corresponding to it is the value.
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});
export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
