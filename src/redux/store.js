import { createStore }  from 'redux';
import rootReducer  from './reducers';

export default function configureStore(InitialState = { todos: [], user: {} }) {
  return createStore(rootReducer, InitialState,
     window.devToolsExtension ? window.devToolsExtension() : undefined);
}
