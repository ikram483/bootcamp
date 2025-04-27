// src/Components/Events.js
import React, { useState } from "react";

const Events = () => {
  // Part I : Click handler
  const clickMe = () => {
    alert("I was clicked");
  };

  // Part II : KeyDown handler
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`You typed: ${event.target.value}`);
    }
  };

  // Part III : Toggle state
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleButton = () => {
    setIsToggleOn((prev) => !prev);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Part I */}
      <button onClick={clickMe}>Click Me</button>

      {/* Part II */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Press the ENTER key! ..."
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Part III */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={toggleButton}>
          {isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
};

export default Events;
