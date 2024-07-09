import { configureStore } from "@reduxjs/toolkit";
// import todoReducer, { todoApi } from "../Slices/todoSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todoApi } from "../reduxApi/Apis/todoApi";
import userSlice from "../Slice/userSlice";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    userSlice: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);
