const _ = require("lodash");
const projects = require("../database/projects-queries.js");
const addErrorReporting = require("../lib/addErrorReporting.js");

async function getAllProjects(req, res) {
  const data = await projects.all();
  return res.send(data);
}

async function postProject(req, res) {
  const data = await projects.create(req.body.name, req.body.description);
  return res.send(data);
}

async function postTodoToProject(req, res) {
  await projects.assignTodoToProject(
    req.params.id,
    req.body.todoId
  );
  return res.sendStatus(204);
}

async function getTodosByProjectId(req, res) {
  const data = await projects.getTodosByProjectId(req.params.id);
  return res.send(data);
}

async function deleteTodoFromProject(req, res) {
  await projects.deleteTodoFromProject(req.params.id, req.params.todoId);
  return res.sendStatus(204);
}

const toExport = {
  getAllProjects: {
    method: getAllProjects,
    errorMessage: "Could not get all projects",
  },
  postProject: {
    method: postProject,
    errorMessage: "Could not post project",
  },
  postTodoToProject: {
    method: postTodoToProject,
    errorMessage: "Could not post todo to project",
  },
  getTodosByProjectId: {
    method: getTodosByProjectId,
    errorMessage: "Could not get todos by project id",
  },
  deleteTodoFromProject: {
    method: deleteTodoFromProject,
    errorMessage: "Could not delete todo from project",
  },
};

for (let route in toExport) {
  toExport[route] = addErrorReporting(
    toExport[route].method,
    toExport[route].errorMessage
  );
}

module.exports = toExport;
