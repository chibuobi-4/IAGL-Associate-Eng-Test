
let todoList = {
  todos: [
    
  ]
};

// save function
const save = async (todo) => {
  todoList.todos.push(todo);
  return todo;
};
module.exports = {
  getTodos: () => Promise.resolve(todoList),
  save,
};



