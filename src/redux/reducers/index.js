import { combineReducers } from 'redux';
import toDoReducer from './todo-reducer';
import userReducer from './users-reducer';

const rootReducer = combineReducers({
  todos: toDoReducer,
  user: userReducer,
});

export default rootReducer;
