import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import logger from 'redux-logger';

import EncodingReducer from './Encoding';

const rootReducer = combineReducers({
  encoding: EncodingReducer,
});

const middlewares = [];
if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
