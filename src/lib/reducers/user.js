/* eslint-disable no-unused-vars */

import { STATUS, ActionTypes } from '../constants/index';

export const userState = {
  isAuthenticated: false,
  status: STATUS.IDLE,
  user: {}
};

function userReducer(state = userState, action) {
  console.debug('STATE',state,action)
  if(action.type === ActionTypes.USER_LOGIN_SUCCESS)
  {
    return {...state,isAuthenticated:true,user:action.payload}
  }
  return state
}

export default userReducer;