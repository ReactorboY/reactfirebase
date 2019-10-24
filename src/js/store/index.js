import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import {forbiddenWordsMiddleware} from '../middleware'
import saga from '../sagas'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialSagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, initialSagaMiddleware))
)

initialSagaMiddleware.run(saga)

export default store