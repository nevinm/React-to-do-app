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
    },
    {
      task: 'take out dog',
      isCompleted: false,
    },
  ],
};
var store = configureStore(InitialState);

render(<Provider store={store}><App/></Provider>,
   document.getElementById('app'));
