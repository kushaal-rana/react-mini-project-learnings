import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    {
      id: 1,
      text: "hello World",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //reducers contain properties & functions
    //current value in the state is state, from action we get the values payload is an object itself
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // for unique id
        text: action.payload,
      };
      //once you made the todo object you need to add it to the state
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo(state, action) {
      //loop through the todos array and if the todo id matches the action.payload id
      //then return a new object with the text property updated to the new value
      //if the id does not match then just return the original todo object
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
