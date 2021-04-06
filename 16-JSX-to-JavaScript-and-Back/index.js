import React from "react";
import ReactDOM from "react-dom";

function App() {
  const firstName = "Nikola";
  const lastName = "Stevanovic";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    // Example1: Enter the JSX Land
    // <h1>Hello {firstName + " " + lastName}!</h1>
    // Example2: Use of Template Literals in <h1> tag
    <div>
      <h1>Hello {`${firstName}  ${lastName}`}!</h1>
      <h2>It is currently about {date.getHours() % 12} o'clock!</h2>
      <h3>Good {timeOfDay}!</h3>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
