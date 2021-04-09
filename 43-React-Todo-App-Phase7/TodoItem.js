/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

import React from "react";

function TodoItem(props) {
  let textColor = null;
  let fontStyle = null;
  if (props.item.completed) {
    textColor = "green";
    fontStyle = "italic";
  } else {
    textColor = "red";
    fontStyle = "bold";
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  const incompletedStyle = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      {/* <p style={{ color: textColor, fontWeight: fontStyle }}>
        {props.item.text}
      </p> */}
      <p style={props.item.completed ? completedStyle : incompletedStyle}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
