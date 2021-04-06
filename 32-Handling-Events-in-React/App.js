import React from "react";

// React Events DOCS:
// @link https://reactjs.org/docs/events.html#supported-events

function handleClick() {
  console.log("I was clicked");
}

function App() {
  return (
    <div>
      <img
        onMouseOver={() => console.log("I was hovered")}
        src="https://www.fillmurray.com/200/100"
      />
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
