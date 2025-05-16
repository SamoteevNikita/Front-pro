import Item from "./Item";

import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <ul className="listwrapper">
        {this.props.todos.map((todo) => (
          <Item todo={todo} onDelete={this.props.onDelete} />
        ))}
      </ul>
    );
  }
}

export default List;