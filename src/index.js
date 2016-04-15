import React from 'react';
import {render} from 'react-dom';
import App from 'components/app';
import configureStore from './redux/store';
import {Provider} from 'react-redux';

//Initial State
const InitialState = {
  todos: [{
      task: 'make dinner',
      isCompleted: true,
      id: 0,
    },
    {
      task: 'take out dog',
      isCompleted: false,
      id: 1,
    },
  ],
  user:{
    username: 'Nevin',
    id: 123,
  },
};
var store = configureStore(InitialState);

//TO:DO Read context
render(<Provider store={store}><App/></Provider>,
   document.getElementById('app'));
