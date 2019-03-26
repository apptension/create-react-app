import { combineReducers } from 'redux-immutable';

import { reducer as localesReducer } from './locales/locales.redux';
//<-- IMPORT MODULE REDUCER -->

export default function createReducer() {
  return combineReducers({
    locales: localesReducer,
    //<-- INJECT MODULE REDUCER -->
  });
}
