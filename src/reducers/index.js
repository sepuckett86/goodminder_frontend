import { combineReducers } from 'redux';
import goodmindersReducer from 'reducers/goodminders';
import authReducer from 'reducers/auth';
import displayReducer from 'reducers/display';

export default combineReducers({
  goodminders: goodmindersReducer,
  auth: authReducer,
  display: displayReducer
})
