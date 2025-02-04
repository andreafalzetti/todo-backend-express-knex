const controller = require("../controllers/todo");
const verifyToken = require("../middleware/verifyToken");

function routes(app) {
  app.get("/todos", verifyToken, controller.getAllTodos);
  app.get("/todos/:id", verifyToken, controller.getTodo);
  app.get("/todos/assignee/:assigneeId", verifyToken, controller.getTodoByAssignee);

  app.post("/todos", verifyToken, controller.postTodo);
  app.patch("/todos/:id", verifyToken, controller.patchTodo);

  app.delete("/todos", verifyToken, controller.deleteAllTodos);
  app.delete("/todos/:id", verifyToken, controller.deleteTodo);
}   

module.exports = routes;
