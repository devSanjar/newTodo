import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addTodoInfoReducer } from './reducers/todoReducer'




const reducer = combineReducers({
  addTodoInfo: addTodoInfoReducer
})

const todosFromStorage = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

const initialState = {
  addTodoInfo: {
    todos: todosFromStorage
  }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store