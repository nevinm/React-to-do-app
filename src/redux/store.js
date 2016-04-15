import { applyMiddleware, compose, createStore }  from 'redux';
import rootReducer  from './reducers';
import thunk  from 'redux-thunk';

// Thunk basically lets us get dispatch and state inside the inner function
// which get returned as params
let finalStore = compose(
  applyMiddleware(thunk)
)(createStore);

export default function configureStore(InitialState = { todos: [], user: {} }) {
  return finalStore(rootReducer, InitialState,
     window.devToolsExtension ? window.devToolsExtension() : undefined);
}
