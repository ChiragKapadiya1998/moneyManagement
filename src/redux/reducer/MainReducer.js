import {USER_DATA, DELETE_DATA, EDIT_DATA, API_DATA} from '../action/Types';

const initialState = {
  user: [],
};

const mainReducer = (state = initialState, action) => {
  console.log('action is....', action);
  console.log('user is....', state?.user);

  switch (action.type) {
    case USER_DATA:
      console.log('Add user is....', state?.user);
      return {
        ...state,
        user: [...state?.user, action?.payload],
      };

    case DELETE_DATA:
      return {
        user: state?.user?.filter(item => item?.id !== action?.payload?.id),
      };

    case EDIT_DATA:
      const editData = state?.user?.map(item => {
        return item?.id == action?.payload?.id ? action.payload : item;
      });

      return {
        ...state,
        user: editData,
      };

    default:
      return state;
  }
};

export default mainReducer;
