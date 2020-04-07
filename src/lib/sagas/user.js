/* eslint-disable no-unused-vars */
import { all, delay, put, takeLatest, call } from 'redux-saga/effects';

import { ActionTypes } from '../constants/index';
import { handleResponse } from '../../helpers/handleResponse';

function fakeAuthorize () {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
    
  return fetch('https://api.github.com/users/adityavj2010', requestOptions)
    .then(handleResponse)
}
  
/**
 * Login
 */
export function* login(action) {
  console.debug('LOGIN SAGA',action)
  const { history } = action.payload
  try {
    const user = yield call(fakeAuthorize)

    yield put({
      type: ActionTypes.USER_LOGIN_SUCCESS,
      payload: user
    });
    console.warn('Routing to dashboard')
    yield put(history.push('/dashboard'))
    console.warn('Routed to dashboard')

  } catch (err) {
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: err,
    });
  }
}

/**
 * Logout
 */
export function* logout() {
  try {
    yield delay(200);

    yield put({
      type: ActionTypes.USER_LOGOUT_SUCCESS,
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGOUT_FAILURE,
      payload: err,
    });
  }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN, login),
    takeLatest(ActionTypes.USER_LOGOUT, logout),
  ]);
}