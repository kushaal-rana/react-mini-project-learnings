import { useState } from "react";

import "./App.css";

function App() {
  const arr = ["India", "Pakistan", "USA"];

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([
    { name: "India", checked: false },
    { name: "Pakistan", checked: true },
    { name: "USA", checked: false },
  ]);
  const handleChange = (index) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
    // items[index].checked = !items[index].checked;
    // console.log(items);
    // setItems([...items]);
  };
  const removeItem = (index) => {
    setItems((prevItems) => {
      return prevItems.filter((item, i) => i != index);
    });

    // const newItems = items.filter((item, i) => i != index);
    // setItems(newItems);
  };

  const addItemToTheList = () => {
    if (newItem === "") return;
    setNewItem("");
    setItems((prevItems) => [...prevItems, { name: newItem, checked: false }]);
  };

  return (
    <div className="App">
      <h1>Hello Kushaal</h1>
      <ul style={{ listStyle: "none" }}>
        <div style={{ display: "flex", margin: "10px" }}>
          <input
            type="text"
            placeholder="Add Item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addItemToTheList()}
          />
          <button style={{ marginLeft: "10px" }} onClick={addItemToTheList}>
            Add
          </button>
        </div>
        {items.map((item, index) => (
          <div style={{ display: "flex" }} key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleChange(index)}
            />
            <li>
              {item.name}{" "}
              {item.checked ? (
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => removeItem(index)}
                >
                  ❌
                </span>
              ) : (
                ""
              )}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
