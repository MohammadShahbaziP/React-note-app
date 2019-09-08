import { combineReducers , createStore, applyMiddleware, compose } from 'redux'
import filterReducer from '../reducers/filter'
import noteReducer from '../reducers/note'
import thunk from 'redux-thunk'

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default () =>{
    const store = createStore(combineReducers({
        notes: noteReducer,
        filter: filterReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
    )
    return store
}