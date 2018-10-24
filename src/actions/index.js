import { SAVE_GOODMINDER, CHANGE_AUTH, CHANGE_HOME_DISPLAY, CHANGE_ADD_DISPLAY } from 'actions/types';
import { UPDATE_USER } from 'actions/types';
import { AUTH_USER } from 'actions/types';

export * from 'actions/API_Request';
export * from 'actions/navigation';

export function saveGoodminder(goodminder) {
  return {
    type: SAVE_GOODMINDER,
    payload: goodminder
  }
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}

export function changeHomeDisplay(display) {
  return {
    type: CHANGE_HOME_DISPLAY,
    payload: display
  }
}

export function changeAddDisplay(display) {
  return {
    type: CHANGE_ADD_DISPLAY,
    payload: display
  }
}

export function updateUser(email, username) {
  return {
    type: UPDATE_USER,
    payload: {email: email, username: username}
  }
}

// Normal, synchronous action creator
export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  }
}
