import React, {Component} from 'react';

export default class UserInfo extends Component {
  handleNewId() {
    this.props.createNewUserId();
  }

  render() {
    return (
     <li>
       <div>username: {this.props.user.username}</div>
       <div>id: {this.props.user.id}</div>
       <button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
     </li>
   );
  }
}
