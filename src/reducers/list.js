const todos = (state = {demo:1}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        demo:2
      }
    default:
      return state
  }
}

export default todos
