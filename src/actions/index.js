
// export const addTodo = dispatch => ({
//   type: 'ADD_TODO'
// })




const addTodo = (text) => ({
  type: 'ADD_TODO',
  text:text
})


export const actions = {
  addTodo
}