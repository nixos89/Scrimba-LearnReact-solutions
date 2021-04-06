import React from "react"; // indirectly used to INTEPRET JSX syntax
import ReactDOM from "react-dom";

// JSX: 1st arg - whatIWantToRender (JSX syntax used here); 2nd arg - whereIWantToRenderIt
ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"));

// OLD way of changing DOM  without using JSX
// var myNewP = document.createElement("p")
// myNewP.innerHTML = "This is a paragraph."
