import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import mainReducer from './MainReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['userData', 'reminder'],
};

const appReducer = combineReducers({
  data: persistReducer(persistConfig, mainReducer),
});

export default appReducer;
