import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button>Change!</button>
      </div>
    );
  }
}

export default App;
