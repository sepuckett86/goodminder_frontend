import { SAVE_GOODMINDER, CHANGE_AUTH, CHANGE_HOME_DISPLAY, CHANGE_ADD_DISPLAY } from 'actions/types';

export * from 'actions/API_Request';

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
