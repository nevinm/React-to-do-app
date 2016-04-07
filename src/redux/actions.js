import * as types from './constants';

//Registering the actions
export function addItem(item) {
  return { type: types.ADD_ITEM, item };
}

export function toggleItem(item) {
  return { type: types.TOGGLE_ITEM, item };
}

export function saveItem(oldTask, newTask) {
  var item = { oldTask, newTask };
  return { type: types.SAVE_ITEM, item };
}
