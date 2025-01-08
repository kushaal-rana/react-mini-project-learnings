import "./App.css";
import { useState } from "react";

function Cell({ filled, onClick, label }) {
  // This is another component that should be in a separate file, but for practice, it's okay to keep it here
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}

function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(true);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]; // flat will convert 2D array to 1D

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    if (order.includes(index)) return;
    const newOrder = [...order, index];
    setOrder(newOrder);
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
    console.log("Cell clicked at index:", newOrder);
  };

  return (
    <div className="">
      <h1>GreatFrontEnd Platform Question: Grid Light</h1>
      <div className="wrapper">
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
        >
          {config.flat(1).map((value, index) => {
            return value ? (
              <Cell
                key={index} // Use index as the key
                filled={order.includes(index)}
                onClick={() => activateCells(index)}
                label={`Cell ${index}`}
              />
            ) : (
              <span></span>
            );
          })}
        </div>
      </div>
      {isDeactivating && <p>Deactivating Cells...</p>}
    </div>
  );
}

export default App;
