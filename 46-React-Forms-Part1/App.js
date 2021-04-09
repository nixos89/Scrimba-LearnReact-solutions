import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleChange}
        />
        <p>
          {this.state.firstName} {this.state.lastName}
        </p>
      </form>
    );
  }
}

export default App;
