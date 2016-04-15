import React, {Component} from 'react';

export default class UserInfo extends Component {
  handleNewId() {
    this.props.actions.createNewUserId();
  }

  handleNewIdonOdd() {
    this.props.actions.createNewUserIdOdd();
  }

  handleNewIdAsync() {
    this.props.actions.createNewUserIdAsync();
  }

  render() {
    return (
     <li>
       <div>username: {this.props.user.username}</div>
       <div>id: {this.props.user.id}</div>
       <button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
       <button onClick={this.handleNewIdonOdd.bind(this)}>Only on Odd</button>
       <button onClick={this.handleNewIdAsync.bind(this)}>Only on Async</button>
     </li>
   );
  }
}
