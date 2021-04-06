import React from "react";
import ReactDOM from "react-dom";

function App() {
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

  const styles = {
    style: "orange",
    backgroundColor: "red",
    fontSize: 24,
  };
  return <h1 style={styles}>Good {timeOfDay}!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
