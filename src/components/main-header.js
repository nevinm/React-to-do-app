import React from 'react';
import { IMAGE_PATH } from '../redux/constants';

export default class MainHeader extends React.Component {
  render() {
    var imgStyle = {
      width: 'auto',
      height: '200px',
    };

    return (
      <div>
        <img style={imgStyle} src={IMAGE_PATH} />
        <h1>To Do App</h1>
      </div>
    );
  }
}
