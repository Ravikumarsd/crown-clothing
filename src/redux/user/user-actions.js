import userActionTypes from './user-types'
const { SET_CURRENT_USER, SET_LOADER } = userActionTypes

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
})

export const setLoader = loading => ({
  type: SET_LOADER,
  payload: loading
})

//action --> reducer --> store --> react
