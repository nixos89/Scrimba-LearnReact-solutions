import React from "react";

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
  // class-based component
  // constructor
2. Have state keep track of whether the user is logged in or not
  // isLoggedIn: boolean
3. Add a button that logs the user in/out
  // event listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
    // Conditional Rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
// Conditional Rendering
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.handleLogging = this.handleLogging.bind(this);
  }

  handleLogging() {
    this.setState((prevState) => {
      return {
        loggedIn: !prevState.loggedIn,
      };
    });
  }

  render() {
    return (
      <div>
        {/* make special file Button for displaying text*/}
        <button onClick={this.handleLogging}>
          {this.state.loggedIn ? `Log Out` : `Log In`}
        </button>
        <p>You are currently logged {this.state.loggedIn ? `in` : `out`}</p>
      </div>
    );
  }
}

export default App;
