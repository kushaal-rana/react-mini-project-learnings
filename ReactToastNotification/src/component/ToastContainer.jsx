import React, { useState, useRef } from "react";

function ToastContainer() {
  const [toasts, setToasts] = useState([]);
  const timerRef = useRef({});
  console.log(toasts);
  console.log(timerRef);
  const handleClose = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    clearTimeout(timerRef.current[id]);
    delete timerRef.current[id];
  };

  const handleAdd = (message, type) => {
    const id = new Date().getTime();
    // const id = Date.now();
    const newToast = [...toasts, { id, message, type: type }]; //since same name so we can write type:type or only type
    setToasts(newToast);
    timerRef.current[id] = setTimeout(() => {
      handleClose(id);
    }, 5000);
  };

  return (
    <div className="container">
      <div className="toast-container">
        {toasts &&
          toasts.length > 0 &&
          toasts.map(({ id, message, type }) => (
            <div key={id} className={`toast ${type}`}>
              {message} <span onClick={() => handleClose(id)}>❌</span>
            </div>
          ))}
      </div>
      <div className="btn-container">
        <button onClick={() => handleAdd("Success", "success")}>
          Success Toast
        </button>
        <button onClick={() => handleAdd("Info", "info")}>Info Toast</button>
        <button onClick={() => handleAdd("Warning", "warning")}>
          Warning Toast
        </button>
        <button onClick={() => handleAdd("Error", "error")}>Error Toast</button>
      </div>
    </div>
  );
}

export default ToastContainer;
