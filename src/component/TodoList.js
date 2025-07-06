import React, { Component } from "react";
import Todo from "./Todo";
import { fetchTodos, addTodo } from "../actions";
import { connect } from "react-redux";

class TodoList extends Component {
  state = {
    newTask: "",
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newTask } = this.state;
    if (newTask.trim()) {
      this.props.addTodo({ task: newTask });
      this.setState({ newTask: "" }); // clear input
    }
  };

  render() {
    const { todos } = this.props.data;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="add-todo">
          <input
            type="text"
            className="add-todo-input"
            value={this.state.newTask}
            onChange={this.handleChange}
            placeholder="Add a new todo"
            aria-label="Add a new todo"
          />
          <button
            type="submit"
            className="add-todo-button"
            disabled={!this.state.newTask.trim()}
          >
            ➕ Add
          </button>
        </form>

        <ul className="todo-list">
          {todos && todos.length > 0 ? (
            todos.map((todo, index) => (
              <Todo key={`todo-${index}`} todo={todo.task} />
            ))
          ) : (
            <li>No todos, yay!</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData,
});
export default connect(mapStateToProps, {
  fetchTodos,
  addTodo,
})(TodoList);
