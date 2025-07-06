//const { getTodos } = require("../repository/todo");

const getTodos = (repository) => async () => {
  return await repository.getTodos();
};

const addTodo = (repository) => async (todo) => {
  const newTodo = await repository.save(todo);
  return newTodo;
};

module.exports = (repository) => ({
  getTodos: getTodos(repository),
  addTodo: addTodo(repository),
});
