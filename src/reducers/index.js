import { combineReducers } from 'redux';
import goodmindersReducer from 'reducers/goodminders';
import promptsReducer from 'reducers/prompts';
import authReducer from 'reducers/auth';
import displayReducer from 'reducers/display';
import responseReducer from 'reducers/response';
import userReducer from 'reducers/user';
import navigationReducer from 'reducers/navigation';

export default combineReducers({
  goodminders: goodmindersReducer,
  prompts: promptsReducer,
  auth: authReducer,
  display: displayReducer,
  response: responseReducer,
  user: userReducer,
  navigation: navigationReducer
})
