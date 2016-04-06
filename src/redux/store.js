import { createStore }  from 'redux';
import reducer  from './reducer';

export default function configureStore(todos = []) {
  return createStore(reducer, todos,
     window.devToolsExtension ? window.devToolsExtension() : undefined);
}
