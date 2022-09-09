import {applyMiddleware, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = (state, action) => {
  if (action.type === 'RESET_REQUEST') {
    AsyncStorage.removeItem('persist:root');
    state = undefined;
  }
  return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, promise),
);

export const persistor = persistStore(store);
