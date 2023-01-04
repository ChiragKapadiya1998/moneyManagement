import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import appReducer from '../reducer/Index';

export const store = createStore(appReducer, {}, applyMiddleware(thunk));

export const persistor = persistStore(store);
