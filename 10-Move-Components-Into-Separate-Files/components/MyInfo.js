import React from "react";

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
export default MyInfo;
