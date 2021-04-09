import React, { Component } from "react";

// OLD: https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// UPDATED (2018): https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    // return the new-updated state based upon the props
    // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  }

  getSnapshotBeforeUpdate()}{
    // create a a backup of the current way things are
    // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  }

  // DEPRECATED/removed in 17.x
  // componentWillMount() {

  // }

  componentDidMount() {
    // GET the data I need to correctly display
  }

  // DEPRECATED/removed in 17.x
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.whatever !== this.props.whatever) {
  //     // do something important here
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  // DEPRECATED/removed in 17.x
  // componentWillUpdate() {

  // }

  componentWillUnmount() {
    // teardown or cleanup your code before your component disappears
    // (E.g. remove event listeners)
  }

  render() {
    return <div>Code goes here</div>;
  }
}

export default App;
