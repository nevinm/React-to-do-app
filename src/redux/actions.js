import * as types from './constants';

export function addItem(item) {
  return { type: types.ADD_ITEM, item };
}
