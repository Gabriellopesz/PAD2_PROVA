export function AddTodo(todo) {
  return {
    type: 'ADD_TODO',
    payload: {
      todo
    }
  }
}

export function DeleteTodo(todo_id) {
  return {
    type: 'DELETE_TODO',
    payload: {
      todo_id
    }
  }
}