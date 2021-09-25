const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const { todo } = action.payload
      
      return [
        ...state,
        {
          id: new Date().toString(),
          ...todo
        }
      ]
  
    case 'DELETE_TODO':
      const { todo_id } = action.payload

      const filteredTodos = state.filter(todo => todo.id !== todo_id)

      return filteredTodos

    default:
      return state
  }
}

export { todos }