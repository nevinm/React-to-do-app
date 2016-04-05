import React from 'react';

export default class CreateTodo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  handeCreate(event) {
    event.preventDefault();
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';
  }

  validateInput(task) {
    if (!task) {
      return 'please enter a task';
    }else if (_.find(this.props.todos, todo => todo.task === task)) {
      return 'Task already exists';
    }else {
      return null;
    }
  }

  renderError() {
    if (!this.state.error) {
      return null;
    }

    return <div style ={{ color: 'red' }}>{this.state.error}</div>;
  }

  render() {
    return (
      <form onSubmit={this.handeCreate.bind(this)}>
        <input type="text" placeholder="What is it homie?" ref="createInput"/>
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }
}
