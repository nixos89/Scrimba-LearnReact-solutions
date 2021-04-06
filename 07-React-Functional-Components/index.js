// Objective: Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anything in them you want.

// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page
import React from "react";
import ReactDOM from "react-dom";

// IMPORTANT: Always use CAPITAL letter to start name of functional component!
function MyApp() {
  return (
    //MUST use DIV tag in order to implement 2 DIFFERENT html tags
    <div>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <ol></ol>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
