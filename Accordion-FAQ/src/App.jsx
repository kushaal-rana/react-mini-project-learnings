import { useState } from "react";
import Accordion from "./components/Accordion";
import FAQ from "./components/FAQ";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FAQ />
    </>
  );
}

export default App;
