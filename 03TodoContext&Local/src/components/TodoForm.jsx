import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    // addTodo({ todo });//string mai nahi dena hai object dena hai
    addTodo({ todo: todo, completed: false }); //string mai nahi dena hai object dena hai id yaha nahi dere kyuki waha id de rahe hai add.js mai
    //addTodo({ todo, completed: false }); //yaha pe if variable name is same todo:todo sirf todo bhi bhej sakte hi
    setTodo(""); //field se bhi gayab kardiya input jo user ne likha tha
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
