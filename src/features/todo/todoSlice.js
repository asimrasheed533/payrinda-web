// 2 methood
// 1. createSlice
// 2. createReducer

// nanoid: create unique id
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Filter } from "node_modules/react-feather/dist/index";

const intialState = {
  todos: [
    {
      id: 1,
      text: "Hello Word",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  intialState,
  //now create here reduser, is ati hai properties / functions
  reduser: {
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removetodo: (state, action) => {
      state.todos = sate.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addtodo, removetodo } = todoSlice.action;

export default todoSlice.reduser;
