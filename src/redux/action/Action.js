import {
  ADD_DATA,
  EDIT_DATA,
  DELETE_DATA,
  ADD_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER,
} from './Types';

// For Expense Data
export const addData = request => async dispatch => {
  dispatch({type: ADD_DATA, payload: request});
  console.log('addExpense request...', request);
};
export const editData = request => async dispatch => {
  dispatch({type: EDIT_DATA, payload: request});
  console.log('addExpense request...', request);
};
export const deleteData = request => async dispatch => {
  dispatch({type: DELETE_DATA, payload: request});
  console.log('addExpense request...', request);
};

// For Reminder Data
export const addReminder = request => async dispatch => {
  dispatch({type: ADD_REMINDER, payload: request});
  console.log('addReminder request...', request);
};
export const deleteReminder = request => async dispatch => {
  dispatch({type: DELETE_REMINDER, payload: request});
  console.log('deleteReminder request...', request);
};
export const updateReminder = request => async dispatch => {
  dispatch({type: UPDATE_REMINDER, payload: request});
  console.log('updateReminder request...', request);
};
