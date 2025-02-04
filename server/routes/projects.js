const controller = require("../controllers/projects");
const verifyToken = require("../middleware/verifyToken");

function routes(app) {
  app.get("/projects", verifyToken, controller.getAllProjects);
  app.post("/projects", verifyToken, controller.postProject);

  app.get("/projects/:id/todos", verifyToken, controller.getTodosByProjectId);
  app.post("/projects/:id/todos", verifyToken, controller.postTodoToProject);
  app.delete("/projects/:id/todos/:todoId", verifyToken, controller.deleteTodoFromProject);
}

module.exports = routes;


