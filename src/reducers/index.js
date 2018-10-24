import { combineReducers } from 'redux';
import goodmindersReducer from 'reducers/goodminders';
import promptsReducer from 'reducers/prompts';
import authReducer from 'reducers/auth';
import displayReducer from 'reducers/display';
import userReducer from 'reducers/user';
import navigationReducer from 'reducers/navigation';
import responseReducer from 'reducers/response';

export default combineReducers({
  goodminders: goodmindersReducer,
  prompts: promptsReducer,
  auth: authReducer,
  display: displayReducer,
  user: userReducer,
  navigation: navigationReducer,
  response: responseReducer
})
