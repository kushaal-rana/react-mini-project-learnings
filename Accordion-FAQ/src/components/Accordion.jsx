import { useState } from "react";
export default function Accordion({ questions, answers }) {
  const [show, setShow] = useState(false);

  return (
    <div className="accordion">
      <h2>
        {questions}{" "}
        <span onClick={() => setShow(!show)}>{show ? "⊖" : "✚"}</span>
      </h2>
      {show && <p>{answers}</p>}
    </div>
  );
}
