import { SAVE_GOODMINDER, CHANGE_AUTH, CHANGE_HOME_DISPLAY, CHANGE_ADD_DISPLAY } from 'actions/types';
import { UPDATE_USER } from 'actions/types';
import { SET_CURRENT_GM, ADD_PREVIOUS_GM, SET_BACK_GM, SET_CURRENT_PROMPT } from 'actions/types';

export * from 'actions/API_Request';

export function saveGoodminder(goodminder) {
  return {
    type: SAVE_GOODMINDER,
    payload: goodminder
  }
}

export function setCurrentGM(goodminder) {
  return {
    type: SET_CURRENT_GM,
    payload: goodminder
  }
}

export function addPreviousGM(goodminder) {
  return {
    type: ADD_PREVIOUS_GM,
    payload: goodminder
  }
}

export function setBackGM(int) {
  return {
    type: SET_BACK_GM,
    payload: int
  }
}

export function setCurrentPrompt(prompt) {
  return {
    type: SET_CURRENT_PROMPT,
    payload: prompt
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
