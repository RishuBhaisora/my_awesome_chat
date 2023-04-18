import {createStore,combineReducers} from "redux"


  const reducer= combineReducers({})

export type State = ReturnType<typeof reducer>

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
