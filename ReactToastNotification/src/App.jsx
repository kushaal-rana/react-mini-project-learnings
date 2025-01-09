import { useState } from "react";
import ToastContainer from "./component/ToastContainer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
    </>
  );
}

export default App;
