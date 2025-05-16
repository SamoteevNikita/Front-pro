import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.title);

    this.setState({
      title: "",
    });
  }

  handleInputChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    return (
      <form className="d-flex" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    );
  }
}

export default Form;