import React from "react";

// function App(props) {
//   return (
//     <div>
//       <h1>Code goes here {props.someField}</h1>
//     </div>
//   );
// }

class App extends React.Component {
  yourMethodHere() {}

  render() {
    // this.yourMethodHere(); // method invocation example
    const date = new Date();
    // it's a MUST to use 'this' to access 'props'
    return (
      <div>
        <h1>Code goes here {this.props.someField}</h1>
      </div>
    );
  }
}

export default App;
