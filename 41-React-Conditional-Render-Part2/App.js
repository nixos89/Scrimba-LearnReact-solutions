import React, { Component } from "react";
import Conditional from "./Conditional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: [
        /*
        "Call your mom!",
        "New spam email available. All links are definitely safe to click.",*/
      ],
    };
  }

  render() {
    return (
      <div>
        {/* {this.state.unreadMessages.length > 0 ? (
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        ) : (
          <h2>You have NO unread messages!</h2>
        )} */}
        {/* following code will execute NULL (i.e. NOTHING) IFF 1st expression is FALSE */}
        {this.state.unreadMessages.length > 0 && (
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        )}
      </div>
    );
  }
}

export default App;
