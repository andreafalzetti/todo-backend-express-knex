const knex = require("./connection.js");

async function all() {
  return knex("projects");
}

async function create(name, description) {
    return knex("projects").insert({ name, description }).returning("*");
}

async function assignTodoToProject(projectId, todoId) {
    return knex("project_todos").insert({ project_id: projectId, todo_id: todoId });
}

async function getTodosByProjectId(projectId) {
    return knex("project_todos").where("project_id", projectId).innerJoin("todos", "project_todos.todo_id", "todos.id");
}

async function deleteTodoFromProject(projectId, todoId) {
    return knex("project_todos").where("project_id", projectId).where("todo_id", todoId).del();
}

module.exports = {
  all,
  create,
  assignTodoToProject,
  getTodosByProjectId,
  deleteTodoFromProject,
};
