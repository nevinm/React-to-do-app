import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import MainHeader from './main-header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';

class App extends React.Component {
  render() {
    return (
        <div>
          <MainHeader />
          <CreateTodo todos={this.props.todos} createTask={this.props.actions.addItem} />
          <TodosList
            todos={this.props.todos}
            toggleTask={this.props.actions.toggleItem}
            saveTask={this.props.actions.saveItem}
            deleteTask={this.props.actions.deleteItem} />
        </div>
    );
  }
}

function mapStateToProps(state) {
  //Map only required data/state to that particular component
  return {
    todos: state.todos,
  };
}

//Dont have to pass down dispatch each time or import actions in each component.
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

//Redux will automatically pass in state and dispatch as params to the 2 functions^^
export default connect(mapStateToProps, mapDispatchToProps)(App);
