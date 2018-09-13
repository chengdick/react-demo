const todos = (state = {}, action) => {
  switch (action.type) {

    case 'ADD_TODO':
    console.log(action)
      return {
        demo:action.text
      }
    default:
      return state
  }
}

export default todos
