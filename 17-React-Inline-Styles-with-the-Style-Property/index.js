import React from "react";
import ReactDOM from "react-dom";

function App() {
  const date = new Date(2018, 6, 30, 10);
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30,
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#8914A3";
  } else {
    timeOfDay = "night";
    styles.color = "#D90000";
  }

  return <h1 style={styles}>Good {timeOfDay}!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
