import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "./features/baseAPI";

const Store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export default Store;
