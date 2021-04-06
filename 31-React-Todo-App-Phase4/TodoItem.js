import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} />
      <p>{props.item.text}</p>
    </div>
  );
}

// class TodoItem extends React.Component {
//   render() {
//     return (
//       <div className="todo-item">
//         <input type="checkbox" checked={this.props.item.completed} />
//         <p>{this.props.item.text}</p>
//       </div>
//     );
//   }
// }

export default TodoItem;
