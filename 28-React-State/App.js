import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes",
    };
  }
  render() {
    // IMPORTANT: next line can NOT be done -> it MAY cause some wierdness with React!!!
    // this.props.something = "some new value"
    return (
      <div>
        <h1>Is state important to know? {this.state.answer}</h1>
        <ChildComponent answer={this.state.answer} />
      </div>
    );
  }
}

export default App;
