import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import { connect } from 'react-redux';
import { addItem, toggleItem } from '../redux/actions';

class App extends React.Component {
  createTask(task) {
    this.props.dispatch(addItem(task));
  }

  toggleTask(task) {
    // const foundTodo = _.find(this.props.todos, todo =>todo.task === task);
    // foundTodo.isCompleted = !foundTodo.isCompleted;
    // this.setState({ todos: this.props.todos });
    this.props.dispatch(toggleItem(task));
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo =>todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo =>todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
        <div>
          <h1>To Do App</h1>
          <CreateTodo todos={this.props.todos} createTask={this.createTask.bind(this)} />
          <TodosList
            todos={this.props.todos}
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)} />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
