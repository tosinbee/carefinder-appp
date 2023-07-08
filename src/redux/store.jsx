import { configureStore } from "@reduxjs/toolkit";

import hospitalsSlice from "./slices/HospitalSlice";

const store = configureStore({
  reducer: {
    cart: hospitalsSlice,
  },
});

export default store;
