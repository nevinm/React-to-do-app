import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import MainHeader from './main-header';
import { connect } from 'react-redux';
import { addItem, toggleItem, saveItem, deleteItem } from '../redux/actions';

class App extends React.Component {
  createTask(task) {
    this.props.dispatch(addItem(task));
  }

  toggleTask(task) {
    this.props.dispatch(toggleItem(task));
  }

  saveTask(oldTask, newTask) {
    this.props.dispatch(saveItem(oldTask, newTask));
  }

  deleteTask(taskToDelete) {
    this.props.dispatch(deleteItem(taskToDelete));
  }

  render() {
    return (
        <div>
          <MainHeader />
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
