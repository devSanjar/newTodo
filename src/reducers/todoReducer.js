import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../Constants/TodoType'

export const addTodoInfoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item, index) => index + 1 !== action.payload)
      }

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo === action.payload.oldValue ? action.payload.newValue : todo)
      };

    default:
      return state
  }
}