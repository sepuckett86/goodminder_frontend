// this file is not connected to main app yet

import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

// Because of redux-thunk, can return a function
// instead of an object with type property
// This way, can dispatch multiple actions
// with a single action creator
export const postSignup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

// Normal, synchronous action creator
export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  }
}

export const postSignin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signin', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};
