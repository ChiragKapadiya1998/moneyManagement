import {ADD_DATA, DELETE_DATA, EDIT_DATA} from './Types';

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

// // ADD DATA
// export const addExpense = request => async dispatch => {
//   dispatch({type: EXPENSE_DATA, payload: request});
//   console.log('addExpense request...', request);
// };
// export const addIncome = request => async dispatch => {
//   dispatch({type: INCOME_DATA, payload: request});
//   console.log('addIncome request...', request);
// };

// // EDIT DATA
// export const editExpense = request => async dispatch => {
//   dispatch({type: EDIT_EXPENSE_DATA, payload: request});
//   console.log('editExpense request...', request);
// };
// export const editIncome = request => async dispatch => {
//   dispatch({type: EDIT_INCOME_DATA, payload: request});
//   console.log('editExpense request...', request);
// };

// // DELETE DATA
// export const deleteExpense = request => async dispatch => {
//   dispatch({type: DELETE_EXPENSE_DATA, payload: request});
//   console.log('deleteExpense request...', request);
// };
// export const deleteIncome = request => async dispatch => {
//   dispatch({type: DELETE_INCOME_DATA, payload: request});
//   console.log('deleteExpense request...', request);
// };
