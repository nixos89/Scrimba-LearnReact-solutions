import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Age"
            value={this.state.age}
            name="age"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Male</label>
          <input
            type="radio"
            checked={this.state.gender === "male"}
            value={"male"}
            name="gender"
            onChange={this.handleChange}
          />
          <br />
          <label>Female</label>
          <input
            type="radio"
            checked={this.state.gender === "female"}
            value={"female"}
            name="gender"
            onChange={this.handleChange}
          />
          {/* Create radio buttons for gender here */}
          <br />
          <br />
          Location{" "}
          <select
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value="">--- Choose your destination ---</option>
            <option value="oslo">Oslo</option>
            <option value="tokyo">Tokyo</option>
            <option value="melbourne">Melbourne</option>
          </select>
          {/* Create select box for location here */}
          <br />
          <br />
          <p>Dietary restrictions:</p>
          <input
            type="checkbox"
            name="isVegan"
            onChange={this.handleChange}
            checked={this.state.isVegan}
          />
          Vegetarian{" | "}
          <input
            type="checkbox"
            name="isKosher"
            onChange={this.handleChange}
            checked={this.state.isKosher}
          />
          Kosher{" | "}
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={this.handleChange}
            checked={this.state.isLactoseFree}
          />{" "}
          Lactose Free
          <br />
          {/* Create check boxes for dietary restrictions here */}
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          {/* TODO: Dietary restrictions here, comma separated */}
          <b>Your dietary restrictions:</b>
          <br />
          Vegan: {this.state.isVegan ? "Yes" : "No"}
          <br />
          Kosher: {this.state.isKosher ? "Yes" : "No"}
          <br />
          Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}
        </p>
      </main>
    );
  }
}

export default App;
