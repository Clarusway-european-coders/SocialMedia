import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  loading: false,
  error: false,
  userId: null,
  userName: null,
  creationDate: null,
};

// Use AsyncThunk to update the user state. ClearUser can stay as it is.

export const userLogin = createAsyncThunk(
  //TODO: login with firebase authentication.
  async (thunkAPI, { rejectWithValue }) => {}
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  // if the name the key values are the same you can just write one of them.
  // setUser the key value and the object corresponding to it is the value.
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = true;
      state.userId = payload.userId;
      state.userName = payload.userName;
      state.creationDate = payload.creationDate;
    },
    clearUser: (state) => {
      state.user = false;
      state.userName = null;
      state.userId = null;
      state.creationDate = null;
      state.error = false;
    },
    fetchError: (state) => {
      state.error = true;
      state.user = false;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(userLogin.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(userLogin.fullfilled, (state) => {
  //       state.user = true;
  //       state.loading = false;
  //     })
  //     .addCase(userLogin.rejected, (state) => {
  //       state.loading = false;
  //       state.error = true;
  //     });
  // },
});
export const { fetchStart, fetchSuccess, fetchError, clearUser } =
  authSlice.actions;
export default authSlice.reducer;
