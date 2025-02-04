const _ = require("lodash");
const users = require("../database/user-queries.js");
const addErrorReporting = require("../lib/addErrorReporting.js");

function createToDo(req, data) {
  return data;
}

async function postUser(req, res) {
  const created = await users.create(req.body.name);
  return res.send(createToDo(req, created));
}

const toExport = {
  postUser: { method: postUser, errorMessage: "Could not post user" },
};

for (let route in toExport) {
  toExport[route] = addErrorReporting(
    toExport[route].method,
    toExport[route].errorMessage
  );
}

module.exports = toExport;
