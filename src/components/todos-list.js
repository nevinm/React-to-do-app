import React from 'react';
import _ from 'lodash';
import TodosListItem from './todos-list-item';
import TodosListHeader from './todos-list-header';

export default class TodosList extends React.Component {
  renderItems() {
    var rows = [];
    var i = 0;
    const props = _.omit(this.props, 'todos');
    for (i = 0; i < this.props.todos.length; i++) {
      rows.push(<TodosListItem key={i} todo={this.props.todos[i]} {...props} />);
    }

    return rows;
  }

  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
