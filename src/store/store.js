import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // ✅ correct relative path

const store = configureStore({
  reducer: {
    auth: authReducer, // ✅ attaches the "auth" slice to your Redux store
  },
});

export default store;
