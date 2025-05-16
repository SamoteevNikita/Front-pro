import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.handleDeleteClick}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;