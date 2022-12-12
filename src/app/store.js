import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

// auth is the name we define our slicer, authReducer is the default export from the slicer.
// Configure store combines the slicers together.
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;
