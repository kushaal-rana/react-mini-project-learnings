import { useState } from "react";
import UserContextProvider from "./src/context/UserContextProvider";
import "./App.css";
import Login from "./src/components/Login";
import Profile from "./src/components/Profile";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Hello</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
