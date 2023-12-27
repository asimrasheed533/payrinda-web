import todoReduser from "../features/todo/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reduser: todoReduser,
});
