import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  //yaha pe we are useing this context to get the value of setUser
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login");
    setUser({ username, password });
    //yaha pe we are setting the value of setUser and it will be set as {username, password} in the context
    //To access the value of setUser we need to use the useContext hook and we can aceess the value by user.username and user.password
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}> Submit </button>
    </div>
  );
};
export default Login;
