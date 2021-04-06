import React from "react";

function Navbar() {
  return (
    // can use <header> tag instead of <nav>
    <nav>
      <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Products</a> |{" "}
      <a href="#">Contact</a>
    </nav>
  );
}

export default Navbar;
