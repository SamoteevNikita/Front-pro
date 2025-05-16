import Button from "./Button";

import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <li className="d-flex justify-content-between mb-2 mt-2 listItem">
        <span>{this.props.todo.title}</span>
        <div>
          <Button className="btn btn-success mr-2" title="Done" />
          <Button
            className="btn btn-danger"
            title="Delete"
            onClick={this.props.onDelete}
            id={this.props.todo.id}
          />
        </div>
      </li>
    );
  }
}

export default Item;