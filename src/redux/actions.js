import * as types from './constants';

//Registering the actions
export function addItem(item) {
  return { type: types.ADD_ITEM, item };
}

export function toggleItem(item) {
  return { type: types.TOGGLE_ITEM, item };
}

export function saveItem(oldTask, newTask) {
  return { type: types.SAVE_ITEM, item: { oldTask, newTask }, };
}

export function deleteItem(item) {
  return { type: types.DELETE_ITEM, item };
}

export function createNewUserId() {
  return {
    type: 'CREATE_USER_ID',
    id: Math.floor(Math.random() * 100)﻿,
  };
}

export function createNewUserIdOdd() {
  return (dispatch, getState) => {
    const { user } = getState();
    if (user.id % 2 === 0) {
      return;
    }

    dispatch(createNewUserId());
  };
}

export function createNewUserIdAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createNewUserId());
    }, 2500);
  };
}
