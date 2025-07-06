
let todoList = {
  todos: [
    {
      "task": "This is a todo example"
    }
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



