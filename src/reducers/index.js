import { combineReducers } from 'redux';
import goodmindersReducer from 'reducers/goodminders';
import authReducer from 'reducers/auth';

export default combineReducers({
  goodminders: goodmindersReducer,
  auth: authReducer
})
