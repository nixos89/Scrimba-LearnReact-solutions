import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loading: false,
      character: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data,
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // do something important here
    }
  }

  handleClick() {
    console.log("(in da 'handleClick') this:", this); // 'this' is undefined
    // this.display();
  }

  display() {
    console.log("(in da 'display') this:", this); // 'this' will point to the global object
  }

  handleClickArr = () => {
    console.log("(in da handleClickArr) this:", this);
  };

  handleClickEvent(event) {
    console.log("(in da handleClickEvent) this:", this, "; event: ", event);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{this.state.loading ? `Loading...` : this.state.character.name}</p>
          <button type="button" onClick={this.handleClick}>
            {/* <button type="button" onClick={this.handleClickArr}> */}
            {/* arrow function in the callback */}
            {/* <button type="button" onClick={(e) => this.handleClickEvent(e)}> */}
            Click Me
          </button>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
