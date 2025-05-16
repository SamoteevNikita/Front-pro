import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      todos: [],
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      this.setState({ todos: JSON.parse(savedTodos) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  handleLogin = (username, password) => {
    if (username === "admin" && password === "1234") {
      this.setState({ isLoggedIn: true });
    } else {
      alert("Невірний логін або пароль");
    }
  };

  handleToggleDone = (id) => {
    const updatedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    this.setState({ todos: updatedTodos });
  };

  handleFormSubmit(title) {
    const newTodos = [
      ...this.state.todos,
      { title, done: false, id: uuidv4() },
    ];
    this.setState({ todos: newTodos });
  }

  handleDelete(id) {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  render() {
    if (!this.state.isLoggedIn) {
      let username = "";
      let password = "";

      return (
        <div className="container mt-5">
          <h2>Login</h2>
          <input
            placeholder="Username"
            className="form-control mb-2"
            onChange={(e) => (username = e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-2"
            onChange={(e) => (password = e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => this.handleLogin(username, password)}
          >
            Login
          </button>
        </div>
      );
    }

    return (
      <>
        <Header />
        <main className="container">
          <Form onSubmit={this.handleFormSubmit} />
          <List
            todos={this.state.todos}
            onDelete={this.handleDelete}
            onToggleDone={this.handleToggleDone}
          />
        </main>
      </>
    );
  }
}

export default App;
