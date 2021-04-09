import React, { useState } from "react";

/* Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0
 * and display the count on the screen.
 * Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!
 */

function App() {
  // object spread operator on RIGHT-hand side (when using SQUARE brackets)
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState("Yes"); // adding additional state parameter

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function doubleCount() {
    setCount((prevCount) => prevCount * 2);
  }

  function halfCount() {
    setCount((prevCount) => Math.floor(prevCount / 2));
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={doubleCount}>Double</button>
      <button onClick={halfCount}>Cut in half</button>
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button>Change!</button>
//       </div>
//     );
//   }
// }

export default App;
