import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../features/todo/todoSlice";

//Step 1 Configure Store
// Step 2: Create Reducers
export const stores = configureStore({
  reducer: todoReducers,
});
