import {DELETE_DATA, EDIT_DATA, USER_DATA} from './Types';

export const addUser = request => async dispatch => {
  dispatch({type: USER_DATA, payload: request});
  console.log('addUser request...', request);
};

export const deleteUser = request => async dispatch => {
  dispatch({type: DELETE_DATA, payload: request});
  console.log('deleteUser request...', request);
};

export const editUser = request => async dispatch => {
  dispatch({type: EDIT_DATA, payload: request});
  console.log('editUser request...', request);
};
