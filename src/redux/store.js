import { applyMiddleware, createStore } from 'redux'
import rootReducer from './root-reducer'
import { logger } from 'redux-logger'

const middlewares = [logger]

export default createStore(rootReducer, applyMiddleware(...middlewares))
