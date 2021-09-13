const INITIAL_STATE = {
  currentUser: null,
  loading: false
}

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: payload
      }
    case 'SET_LOADER':
      return {
        ...state,
        loading: payload
      }
    default:
      return state
  }
}

export default userReducer
