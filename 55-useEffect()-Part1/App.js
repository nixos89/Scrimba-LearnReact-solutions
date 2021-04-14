// useEffect replaces 3 following methods (of Class based Components):
// componentDidMount
// componentDidUpdate
// componentWillUnmount


import React, { useState, userEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  /* Next line of code can fully replace useEffect() method, but it will always 
  keep same value of randomly generated  */
  // const [color, setColor] = useState(randomColor());

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  userEffect(() => {
    setColor(randomColor());
  }, [count]); // array contains list of variable to be WATCHED for any kind of change

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
