import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container mt-5">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => this.setState({ username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;