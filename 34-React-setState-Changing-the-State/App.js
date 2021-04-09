import React from "react";

/* Great explanation about bind() method in following article:
 * @link https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/
 */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // Neccessary step to in order to bind class method which uses
    // class' state
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    // when previous state does NOT matter:
    // this.setState({count: 1});
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>Change!</button>
      </div>
    );
  }
}

export default App;
