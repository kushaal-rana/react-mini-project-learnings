import { useState } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import { TodoForm } from "./components";
import { TodoItem } from "./components";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  }; //[]make a new array and inside it spread the old todolist first and then add new todo at start but as Object id we are adding adn rest all we are doing ..todo

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  //{...todo jo values hai wo rakho and ek value completed toggle karo

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")); //ye values string mai deta hai
    //hame chaiye in Json so we Parse to Json
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); //ye state wala todo hai

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            <TodoForm />
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              // yaha pe for keys if we use Index insted of id then when array value is removed whole array is restructred and keys are also restructured but if we use id then keys are not restructured and only the id is removed
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
