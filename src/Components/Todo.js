import React, { useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from '../Actions/todoAction'

const Todo = () => {
  const [todo, setTodo] = useState('')
  const [toEdit, setToEdit] = useState('')
  const [editMode, setEditMode] = useState(false)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(todo))
    setTodo('')
  }

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id))
  }

  const setEditing = (oldValue) => {
    setEditMode(true)
    setToEdit(oldValue);
    setTodo(oldValue)
  }

  const editTodo = () => {
    const object = {
      oldValue: toEdit,
      newValue: todo
    };
    dispatch(updateTodo(object));
    setTodo('')
    setEditMode(false)
  };


  const addTodoInfo = useSelector(state => state.addTodoInfo)
  const { todos } = addTodoInfo

  return (

    <div className='container pt-4'>
      <div className="d-flex justify-content-center">
        <div className="card shadow-sm" style={{ width: '45rem', borderColor: '#0d6efd', borderTopColor: '#94bd31', borderRightColor: '#94bd31' }}>

          <div className="card-body">
            <h1 className="card-title" style={{ color: '#791CB5', fontSize: '3rem' }}>
              Todo List
            </h1>

            <div className="row">
              <div className="col">
                <form onSubmit={submitHandler}>
                  <div className="input-group mb-4 shadow-sm mt-3">

                    <input
                      type="text"
                      className="form-control shadow-sm"
                      placeholder="Todo..."
                      aria-label="Add your new todo"
                      style={{ color: '#0d6efd' }}
                      aria-describedby="basic-addon2"
                      name='todo'
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                      required
                    />

                    {editMode ? (
                      <span className="input-group-text shadow-sm" id="basic-addon2">
                        <button type="submit" className="btn btn-warning py-1 mb-2 mt-2 shadow-sm" onClick={() => editTodo()}>Edit</button>
                      </span>
                    ) : (
                      <span className="input-group-text shadow-sm" id="basic-addon2">
                        <button type="submit" className="btn btn-primary py-1 mb-2 mt-2 shadow-sm">Add Todo</button>
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <ul className="list-group py-3">

              {todos.map((item, index) => (
                <li key={index} className="list-group-item d-flex align-items-center shadow-sm py-4 border border-warning border-3 my-1">
                  <div className="btn-group pt-1" role="group">

                    <button
                      type="button"
                      className="btn btn-outline-success mx-1 "
                      onClick={() => setEditing(item)}
                    >
                      <i className="fas fa-edit" />
                    </button>

                    <button
                      onClick={() => deleteHandler(index + 1)}
                      className="trash-btn btn btn-danger float-end" style={{ color: '#fff', right: '0' }}>
                      <i className="fas fa-trash-alt" />
                    </button>
                    <h6 className='my-3 ms-3'>{item}</h6>
                  </div>

                </li>
              ))}

            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
