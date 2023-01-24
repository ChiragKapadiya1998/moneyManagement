import {
  ADD_DATA,
  EDIT_DATA,
  DELETE_DATA,
  ADD_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER,
} from '../action/Types';

const initialState = {
  userData: [],
  reminder: [],
};

const mainReducer = (state = initialState, action) => {
  console.log('action is....', action);
  console.log('expense is....', state?.userData);
  console.log('Reminder is....', state?.reminder);

  switch (action.type) {
    // For Expense Data
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
        ...state,
        userData: state?.userData?.filter(item => item?.id !== action?.payload),
      };

    // For Reminder Data
    case ADD_REMINDER:
      console.log('Add Reminder is....', state?.reminder);
      return {
        ...state,
        reminder: [...state?.reminder, action?.payload],
      };
    case DELETE_REMINDER:
      return {
        ...state,
        reminder: state?.reminder?.filter(item => item?.id !== action?.payload),
      };
    case UPDATE_REMINDER:
      const updateReminder = state?.reminder?.map(item => {
        return item?.id == action?.payload
          ? {...item, isSwitched: !item?.isSwitched}
          : item;
      });
      return {
        ...state,
        reminder: updateReminder,
      };

    default:
      return state;
  }
};

export default mainReducer;

// case UPDATE_REMINDER:
//   const updateReminder = state?.reminder?.map(item => {
//     return item?.id == action?.payload?.id ? action.payload : item;
//   });
//   return {
//     ...state,
//     reminder: updateReminder,
//   };
