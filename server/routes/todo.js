const controller = require("../controllers/todo");
const verifyToken = require("../middleware/verifyToken");

function routes(app) {
  app.get("/", verifyToken, controller.getAllTodos);
  app.get("/:id", verifyToken, controller.getTodo);
  app.get("/assignee/:assigneeId", verifyToken, controller.getTodoByAssignee);

  app.post("/", verifyToken, controller.postTodo);
  app.patch("/:id", verifyToken, controller.patchTodo);

  app.delete("/", verifyToken, controller.deleteAllTodos);
  app.delete("/:id", verifyToken, controller.deleteTodo);
}

module.exports = routes;
