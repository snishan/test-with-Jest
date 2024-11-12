import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './slices/postSlice';

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
