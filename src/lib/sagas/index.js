import { all, fork } from 'redux-saga/effects';

import user from './user';

/**
 * rootSaga
 */
export default function* root() {
  console.debug('IN ROOT SAGA')
  yield all([fork(user)]);
}