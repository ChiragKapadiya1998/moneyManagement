import {
  EXPENSE_DATA,
  INCOME_DATA,
  EDIT_EXPENSE_DATA,
  EDIT_INCOME_DATA,
  DELETE_EXPENSE_DATA,
  DELETE_INCOME_DATA,
  ADD_DATA,
  EDIT_DATA,
  DELETE_DATA,
} from '../action/Types';

const initialState = {
  userData: [],
  // expense: [],
  // income: [],
};

const mainReducer = (state = initialState, action) => {
  console.log('action is....', action);
  console.log('expense is....', state?.userData);

  switch (action.type) {
    case ADD_DATA:
      console.log('Add expense is....', state?.userData);
      return {
        ...state,
        userData: [...state?.userData, action?.payload],
      };

    case EDIT_DATA:
      const editedData = state?.userData?.map(item => {
        return item?.id == action?.payload?.id ? action.payload : item;
      });
      return {
        ...state,
        userData: editedData,
      };
    case DELETE_DATA:
      return {
        userData: state?.userData?.filter(
          item => item?.id !== action?.payload?.id,
        ),
      };

    // Add data
    // case EXPENSE_DATA:
    //   console.log('Add expense is....', state?.expense);
    //   return {
    //     ...state,
    //     expense: [...state?.expense, action?.payload],
    //   };
    // case INCOME_DATA:
    //   console.log('Add income is....', state?.income);
    //   return {
    //     ...state,
    //     income: [...state?.income, action?.payload],
    //   };

    // Edit data
    // case EDIT_EXPENSE_DATA:
    //   const editExpenseData = state?.expense?.map(item => {
    //     return item?.id == action?.payload?.id ? action.payload : item;
    //   });
    //   return {
    //     ...state,
    //     expense: editExpenseData,
    //   };
    // case EDIT_INCOME_DATA:
    //   const editIncomeData = state?.income?.map(item => {
    //     return item?.id == action?.payload?.id ? action.payload : item;
    //   });
    //   return {
    //     ...state,
    //     income: editIncomeData,
    //   };

    // Delete data
    // case DELETE_EXPENSE_DATA:
    //   return {
    //     expense: state?.expense?.filter(
    //       item => item?.id !== action?.payload?.id,
    //     ),
    //   };
    // case DELETE_INCOME_DATA:
    //   return {
    //     income: state?.income?.filter(item => item?.id !== action?.payload?.id),
    //   };

    default:
      return state;
  }
};

export default mainReducer;
