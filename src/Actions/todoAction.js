import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../Constants/TodoType'

export const addTodo = (todos) => (dispatch, getState) => {
  dispatch({
    type: ADD_TODO,
    payload: todos
  })
  localStorage.setItem('todos', JSON.stringify(getState().addTodoInfo.todos))

}

export const deleteTodo = (id) => (dispatch, getState) => {
  dispatch({
    type: DELETE_TODO,
    payload: id
  })
  localStorage.setItem('todos', JSON.stringify(getState().addTodoInfo.todos))
}


export const updateTodo = (object) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_TODO,
    payload: object
  })
  localStorage.setItem('todos', JSON.stringify(getState().addTodoInfo.todos))
}