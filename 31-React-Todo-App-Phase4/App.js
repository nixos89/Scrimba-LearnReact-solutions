/*
In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to 
display the todo items.

Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the 
component's state

Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
*/

import React from "react";
import TodoItem from "./TodoItem.js";
import todosData from "./todosData.js";

class App extends React.Component {
  constructor() {
    super();
    // SOLUTION1: more easy way in constructor to assign values
    // this.state = {
    //   todos: todosData.map((todo) => {
    //     return <TodoItem key={todo.id} item={todo} />;
    //   }),
    // };
    this.state = {
      todos: todosData,
    };
  }

  render() {
    const todoItems = this.state.todosData.map((todo) => (
      <TodoItem key={todo.id} item={todo} />
    ));
    // SOLUTION1:
    // return <div className="todo-list">{this.state.todos}</div>;
    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
