// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
// a. An h1 with your name
// b. A paragraph with a little blurb about yourself
// c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).
import React from "react";
import ReactDOM from "react-dom";

// const MyInfo = function () { // alternative which also works
function MyInfo() {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Nikola</h1>
      <p>
        Hi, my name is Nikola and I'm a software developer learning{" "}
        <em>ReactJS</em>. Three places I'd like to visit as vacation spots:
      </p>
      <ol>
        <li>Spain - Barcelona</li>
        <li>Norway - Oslo</li>
        <li>China - Shanghai</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));
