const repository = require("../../src/repository/todo");

// New tests

describe("TODO repository", () => {
  beforeEach(() => {
    // Resets internal todo array before running each test
    repository.getTodos().then((data) => (data.todos.length = 0));
  });

  it("should return an object with a todos array", async () => {
    const actual = await repository.getTodos();
    expect(actual).toHaveProperty("todos");
    expect(Array.isArray(actual.todos)).toBe(true);
  });

  it("should add a new todo item", async () => {
    const newTodo = { task: "Test task" };
    await repository.save(newTodo);
    const result = await repository.getTodos();
    expect(result.todos).toContainEqual(newTodo);
  });
});
