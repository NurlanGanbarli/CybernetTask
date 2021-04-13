import {
    LOGIN_SUCCESS,
    LOGOUT
  } from '../actions/types';
  
  const initialState = {
    isAuthenticated: null,
    user: null
  }
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case LOGIN_SUCCESS:
        localStorage.setItem('user', payload)
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          user: payload,
        }
      case LOGOUT:
        localStorage.removeItem('user')
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        }
      default:
        return state;
    }
  }