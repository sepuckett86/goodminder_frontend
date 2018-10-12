import { combineReducers } from 'redux';
import goodmindersReducer from 'reducers/goodminders';
import authReducer from 'reducers/auth';
import displayReducer from 'reducers/display';
import responseReducer from 'reducers/response';

export default combineReducers({
  goodminders: goodmindersReducer,
  auth: authReducer,
  display: displayReducer,
  response: responseReducer
})
